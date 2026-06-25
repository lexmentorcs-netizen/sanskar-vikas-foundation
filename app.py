from flask import Flask, render_template, request, jsonify,razorpay

app = Flask(__name__)

client = razorpay.Client(auth=(
    "rzp_test_SoniIJsePp4Rgs",
    "4FOOFxEW8aQkNJhn5UuRwvqy"
))


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/create-order", methods=["POST"])
def create_order():

    data = request.get_json()

    amount = int(data["amount"]) * 100

    order = client.order.create({

        "amount": amount,

        "currency": "INR",

        "payment_capture": 1
    })

    return jsonify(order)


@app.route("/verify-payment", methods=["POST"])
def verify_payment():

    data = request.get_json()

    try:

        client.utility.verify_payment_signature({

            'razorpay_order_id': data['razorpay_order_id'],

            'razorpay_payment_id': data['razorpay_payment_id'],

            'razorpay_signature': data['razorpay_signature']

        })

        return jsonify({
            "status": "success"
        })

    except:

        return jsonify({
            "status": "failed"
        })


if __name__ == "__main__":
    app.run(debug=True)