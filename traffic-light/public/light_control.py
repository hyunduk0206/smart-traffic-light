import pathlib
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

import time

curr_path = pathlib.Path(__file__).parent.resolve()
driver_path = f"{curr_path}/chromedriver"
url = f"file://{curr_path}"
uri_red = f"{url}/red.html"
uri_yellow = f"{url}/yellow.html"
uri_green = f"{url}/green.html"

chrome_options = Options()
chrome_options.add_argument("--kiosk")
chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
chrome_options.add_experimental_option('useAutomationExtension', False)

driver = webdriver.Chrome(driver_path, chrome_options=chrome_options)

driver.get(uri_red)
time.sleep(1)

driver.get(uri_yellow)
time.sleep(1)

driver.get(uri_green)

time.sleep(5)

driver.quit()
