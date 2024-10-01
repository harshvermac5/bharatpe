import json

# Load the JSON data from the file
with open('./bharatpe.json', 'r') as file:
    data = json.load(file)  # Load JSON data directly

def display_options(options):
    for index, option in enumerate(options):
        print(f"{index + 1}. {option}")

def navigate(data):
    while True:
        print("\nAvailable options:")
        display_options(list(data.keys()))
        print("Type 'back' to return to the previous menu.")
        print("Type 'home' to return to the main menu.")
        print("Type 'q' to quit the program.")

        user_input = input("Enter your choice: ")

        if user_input.lower() == 'q':
            print("Exiting the program.")
            exit()

        if user_input.lower() == 'home':
            return 'home'  # Indicate to return to the main menu

        if user_input.lower() == 'back':
            return  # Go back to the previous menu

        try:
            choice_index = int(user_input) - 1
            
            if choice_index < 0 or choice_index >= len(data):
                print("Invalid selection.")
                continue
            
            selected_key = list(data.keys())[choice_index]
            selected_data = data[selected_key]

            print(f"\nYou selected: {selected_key}")

            # Check if the selected option is a dictionary
            if isinstance(selected_data, dict):
                navigate(selected_data)  # Recursively navigate through nested options
            else:
                print(f"Details for {selected_key}: {selected_data}")

        except ValueError:
            print("Please enter a valid number, 'back', or 'home'.")

def main():
    while True:
        print("\nSelect a product (or type 'q' to quit):")
        products = data["BharatPe"]["Products"]
        display_options(list(products.keys()))
        print("Type 'home' to return to the main menu.")

        user_input = input("Enter your choice: ")

        if user_input.lower() == 'q':
            print("Exiting the program.")
            break

        if user_input.lower() == 'home':
            continue  # Go back to the main menu

        try:
            product_choice = int(user_input) - 1
            
            if product_choice < 0 or product_choice >= len(products):
                print("Invalid selection.")
                continue
            
            selected_product = list(products.keys())[product_choice]
            product_data = products[selected_product]
            
            print(f"\nYou selected: {selected_product}")
            if isinstance(product_data, dict):
                navigate(product_data)  # Start navigating the product options

        except ValueError:
            print("Please enter a valid number or 'home'.")

if __name__ == "__main__":
    main()
