from flask import Flask, send_file, make_response, request
import base64
import datetime
import io

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('./spy-pixel-admin-sdk.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>Hello World!</h1>"

@app.route('/spy-pixel.gif')
def spy_pixel():
    # print("===================================")
    # print("Campaign:", request.args.get("campaign"))
    # print(request.headers)
    # print(request.cookies)
    # print("===================================")

    if (request.args.get("campaign")):
        # Log to database
        log = {
            u'timestamp': datetime.datetime.now(),
            u'email': request.args.get("email"),
            u'headers': dict(request.headers),
            u'cookies': dict(request.cookies)
        }

        doc_ref = db.collection(u'campaigns').document(request.args.get("campaign"))
        doc = doc_ref.get()

        if not doc.exists:
            doc_ref.set({u'logs': []})

        doc_ref.update({u'logs': firestore.ArrayUnion([log])})

    gif_str = base64.b64decode('R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==')
    resp = make_response(send_file(io.BytesIO(gif_str), mimetype='image/gif'),200)
    # resp.set_cookie('userid', "this user doesnt mind cookies", max_age=1296000)
    return resp
