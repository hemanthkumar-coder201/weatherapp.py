 #contactnbook application

contacts={}

while True:
    print("\n Contact Book")
    print("1.Add Contact")
    print("2.view contacts")
    print("3.search contacts")
    print("4.update contacts")
    print("5.delete contacts")
    print("6.exit")

    Choice=input("enter your choice:")

#Add Contact

    if Choice == "1":
     name = input("enter name: ")
     phone = input("enter phone: ")
     Email = input("enter Email: ")
     contacts[name] = {"phone": phone, "Email": Email }
     print("contact added successfully!!")