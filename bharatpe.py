import json

# The JSON data as a string (you can also load it from a file)
data = '''{
    "BharatPe": {
        "Products": {
            "Settlement": {
                "Pending": {
                    "Within 48 hrs": "Asked to wait T+2 days",
                    "After 48 hrs": "Escalate to L2"
                },
                "Success": {
                    "Within 48 hrs": "Asked to wait 24-48 hours",
                    "After 48 hrs": "Asked to wait up to 72 hours",
                    "After 72 hrs": "Escalate to L2"
                },
                "Failed": "Ask to try again; change bank account if this happens multiple times"
            },
            "QR Code Payments": {
                "Transaction Not Visible": {
                    "UTR Available": "Ask for a screenshot",
                    "UTR Not Available": "Politely deny"
                },
                "CCUPI": {
                    "Charges": "2.05% Flat",
                    "Turn off": [
                        "Step 1: Open BharatPe App",
                        "Step 2: Go to Payments tab",
                        "Step 3: Click on Payment Preference",
                        "Step 4: Click on 'No' for chargeable QR"
                    ]
                },
                "Disputed": {}
            },
            "BharatSwipe": {
                "New Order": {
                    "Device Types": {
                        "D1": {
                            "Price": "10,000 Rs",
                            "Features": [
                                "Feature 1",
                                "Feature 2"
                            ]
                        },
                        "D2": {
                            "Price": "12,000 Rs",
                            "Features": [
                                "Feature 1",
                                "Feature 3"
                            ]
                        },
                        "D3": {
                            "Price": "15,000 Rs",
                            "Features": [
                                "Feature 2",
                                "Feature 3"
                            ]
                        },
                        "D4": {
                            "Price": "20,000 Rs",
                            "Features": [
                                "Feature 1",
                                "Feature 2",
                                "Feature 3"
                            ]
                        }
                    },
                    "Order Steps": [
                        "Step 1: Open BharatPe App",
                        "Step 2: Go to the More option",
                        "Step 3: Click on BharatSwipe",
                        "Step 4: Select a plan",
                        "Step 5: Fill in the address",
                        "Step 6: Select a payment method"
                    ]
                },
                "Not Working": {},
                "Disputed": {},
                "Transaction Not Visible": {}
            },
            "BharatPe One": {
                "New Order": {
                    "Plans": {
                        "Basic": {
                            "Price": "500 Rs/month",
                            "Features": [
                                "Feature A",
                                "Feature B"
                            ]
                        },
                        "Premium": {
                            "Price": "1,000 Rs/month",
                            "Features": [
                                "Feature A",
                                "Feature C",
                                "Feature D"
                            ]
                        }
                    }
                },
                "Features": [],
                "Not Working": {}
            },
            "Investment": {
                "Unable to Withdraw": {
                    "Within Lock-In": "Timeline shared",
                    "After Lock-In": "Proof required"
                }
            },
            "BharatPe Speaker": {
                "New Order": {
                    "Plans": {}
                },
                "Cashback": {},
                "Replacement": {},
                "Return": {}
            }
        }
    }
}'''

# Load the JSON data
json_data = json.loads(data)

def display_options(options):
    for index, option in enumerate(options):
        print(f"{index + 1}. {option}")

def main():
    products = json_data["BharatPe"]["Products"]
    
    print("Select a product:")
    display_options(list(products.keys()))
    
    product_choice = int(input("Enter the number corresponding to your choice: ")) - 1
    
    if product_choice < 0 or product_choice >= len(products):
        print("Invalid selection.")
        return
    
    selected_product = list(products.keys())[product_choice]
    product_data = products[selected_product]
    
    print(f"\nYou selected: {selected_product}")
    print("Available options:")
    display_options(list(product_data.keys()))
    
    option_choice = int(input("Enter the number corresponding to your choice: ")) - 1
    
    if option_choice < 0 or option_choice >= len(product_data):
        print("Invalid selection.")
        return
    
    selected_option = list(product_data.keys())[option_choice]
    option_data = product_data[selected_option]
    
    print(f"\nDetails for {selected_option}:")
    
    if isinstance(option_data, dict):
        for key, value in option_data.items():
            if isinstance(value, list):
                print(f"{key}:")
                for item in value:
                    print(f"  - {item}")
            else:
                print(f"{key}: {value}")
    else:
        print(option_data)

if __name__ == "__main__":
    main()
