import datetime
import base64
import io
import os

from flask import Flask, send_file, make_response, request
from dotenv import load_dotenv

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

load_dotenv()  # take environment variables from .env.

# Use the application default credentials
# cred = credentials.ApplicationDefault()
cred = credentials.Certificate({
  "type": "service_account",
  "project_id": "spy-pixel-2e767",
  "private_key_id": os.environ.get('PRIVATE_KEY_ID'),
  "private_key": os.environ.get('PRIVATE_KEY'),
  "client_email": "firebase-adminsdk-ji2n7@spy-pixel-2e767.iam.gserviceaccount.com",
  "client_id": "103696212000263592882",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ji2n7%40spy-pixel-2e767.iam.gserviceaccount.com"
})
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>Hello World!</h1>"

@app.route('/spy-pixel.gif')
def spy_pixel():
    # We don't want to log our own views
    if request.headers.get("Referer") != "https://mail.google.com" and request.headers.get("Referer") != "https://hayeselnut.github.io/":
        # Campaign is loggable
        if request.args.get("campaign"):
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
    resp = make_response(send_file(io.BytesIO(gif_str), mimetype='image/gif'), 200)
    return resp
