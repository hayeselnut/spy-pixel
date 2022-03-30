from flask import Flask, send_file, make_response, request
import base64
import io

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>Hello World!</h1>"

@app.route('/spy-pixel.gif')
def spy_pixel():
    print("===================================")
    print("Campaign:", request.args.get("campaign"))
    # print("User-Agent:", request.headers.get("User-Agent"))
    # print("Host:", request.headers.get("Host"))
    print(request.headers)
    print(request.cookies)

    print("===================================")

    if (request.args.get("campaign")):
        # Log to database
        pass

    gif_str = base64.b64decode('R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==')
    resp = make_response(send_file(io.BytesIO(gif_str), mimetype='image/gif'),200)
    resp.set_cookie('userid', "this user doesnt mind cookies", max_age=1296000)
    return resp
