from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pyautogui as pog

container = "rpBJOHq2PR60pnwJlUyP0" # Container name for all the memes and stuff

websites = [
    # "https://reddit.com/r/wholesomeanimemes",
    # "https://reddit.com/r/wholesomememes"
    "https://reddit.com/r/memes",
    # "https://reddit.com/r/meme",
    "https://reddit.com/r/dankmemes",
    "https://reddit.com/r/animemes",
    # "https://reddit.com/r/goodanimemes",
    # "https://reddit.com/r/funny"
]

def convert(name):
    _name = ""
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for i in name.lower():
        if i in alphabet: _name += i
    return _name

for website in websites:
    driver = webdriver.Chrome("chromedriver.exe")
    driver.get(website)

    time.sleep(10)
    pog.press("esc")
    pog.press("esc")
    pog.press("esc")

    # Create a collection
    i = 1
    # Get first level child elements
    for element in driver.find_element(By.CLASS_NAME, "rpBJOHq2PR60pnwJlUyP0").find_elements(By.XPATH, "./*"): # No, I don't know what XPATH is either
        text = element.text
        # Sanitize the collection
        if text != "" and element.tag_name == "div" and "Promoted" not in text:
            i += 1

            # hehe
            for h3 in element.find_elements(By.TAG_NAME, "h3"):
                h3h3 = h3.text

            # Extract the items from the collection
            for elmnt in element.find_elements(By.TAG_NAME, "img"):
                # Being short was never a bad thing, until now
                if elmnt.size["height"] > 99 and elmnt.size["width"] > 99:
                    elmnt.screenshot(f"{convert(h3h3)}.png") # This method, it puts a smile on my face
    driver.close()
print("\n\nHeist Complete")
