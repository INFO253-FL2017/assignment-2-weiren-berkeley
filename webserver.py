"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask, render_template, request
import os, requests


# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def to_index():
    return render_template("index.html")

@app.route('/index')
def index():
    return render_template("index.html")

@app.route('/about')
def about():
    return render_template("aboutUs.html")

@app.route('/contact', methods=['GET'])
def contact():
    return render_template("contactUs.html")

@app.route('/email', methods=['POST'])
def send_email():
    form = request.form
    message = form.get("Message")
    name = form.get("Name")
    subject = form.get("Subject")
    email = form.get("Email")
    notifications = []
    if "INFO253_MAILGUN_TO_EMAIL" in os.environ:
        pass
    else:
        return render_template("contactUs.html",
                               failnotice="You email was not sent. Please try again later",
                               )
    if "INFO253_MAILGUN_USER" in os.environ:
        pass
    else:
        return render_template("contactUs.html",
                               failnotice="You email was not sent. Please try again later",
                               )
    if "INFO253_MAILGUN_PASSWORD" in os.environ:
        pass
    else:
        return render_template("contactUs.html",
                               failnotice="You email was not sent. Please try again later",
                               )
    if "INFO253_MAILGUN_DOMAIN" in os.environ:
        pass
    else:
        return render_template("contactUs.html",
                               failnotice="You email was not sent. Please try again later",
                               )
    data = {
        'from': email,
        'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
        'subject': name+": "+subject,
        'text': message,
    }
    auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])

    r = requests.post(
        'https://api.mailgun.net/v3/{}/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"]),
        auth=auth,
        data=data)
    if r.status_code == requests.codes.ok:
        return render_template("contactUs.html",
                           successnotice="Hi "+name+", your message has been sent",
                           )
    else:
        return render_template("contactUs.html",
                           failnotice="You email was not sent. Please try again later",
                           )

@app.route('/blog/8-experiments-in-motivation')
def eightExperiments():
    return render_template("eightExperiments.html")

@app.route('/blog/a-mindful-shift-of-focus')
def aMindfulShift():
    return render_template("aMindfulShift.html")

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def howToDevelop():
    return render_template("howToDevelop.html")

@app.route('/blog/training-to-be-a-good-writer')
def trainingToBe():
    return render_template("trainingToBe.html")

@app.route('/blog/what-productivity-systems-wont-solve')
def whatProductivitySystems():
    return render_template("whatProductivitySystems.html")



