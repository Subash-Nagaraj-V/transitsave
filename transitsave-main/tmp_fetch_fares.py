import pandas as pd
import requests

url = "https://mtcbus.tn.gov.in/Home/fares"
# Need to disable ssl verification sometimes for government websites
dfs = pd.read_html(url, verify=False)
for i, df in enumerate(dfs):
    print(f"Table {i}:")
    print(df.head(10))
    print("-" * 20)
