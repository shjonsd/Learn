---
menu: Klappir Platform
route: /klappir_platform_data
name: Data
---

# Data

## Overview

The Data Overview provides a dashboard view of the datasets in the tool by consumption category. The imported data and the streamed data directly from APIs is reviewable as transactional data under each category. You can select the year filter for review. Each Category is clickable and open the transactional data in detail.

There are consumption categories that provide data here that is not currently visable in the Platform Dashboard or the Insights analytics. Those categories are:

    - Transport as flights
    - Transport as trips
    - Print as paper
    - Cargo


 ![New Users](https://klappir-static.s3.amazonaws.com/img/learn/Data-Overview-dashboard.png)

## Data Sources

The Data Sources are Klappir's term for the suppliers and services that your organization is utilizing for the emissions inventory. The consumption data provided by your suppliers can be streamed into the Klappir Platform via APIs or by manually importing datasets from the suppliers.

![Data sources Icelandic](https://klappir-static.s3.amazonaws.com/img/learn/Data-Datasources-Iceland.png)

If an API is set up from your supplier or provider, you will find the company logo and name under the specific category (fuel, waste, water, etc.).

  1. Click the supplier line to open the supplier card.
  2. If this is the first time you are setting up the data sources, you need to Activate the connection by clicking the button.
  
![Data sources activation](https://klappir-static.s3.amazonaws.com/img/learn/Data-Data+sources-Activate.png)

  3. Once activated you can monitor the status of the data source in terms of the frequency of data supply and the most recent update.
  
![Data sources supplier card](https://klappir-static.s3.amazonaws.com/img/learn/Data-Data+sources-supplier+card.png)

 
## Importing Data

When you need to import datasets manually, it is important to have an extensive list of the suppliers and services you need to create as a data source in the Platform. The consumption datasets that you will be importing need to have a data source to connect the data to. Once a service provider is created it will be available in the dropdown list for future data importing.

![Data Importing data categories](https://klappir-static.s3.amazonaws.com/img/learn/Data-Importing+data-categories.png)

**How to set up new Data Sources**
  1. Click the Import Data to open the importing tool.
  2. Choose the type of data you are importing by clicking the icon.
  3. If this is the first time you are importing data for a specific data source, you need to **+ Register New Supplier**
  
![Data Importing New Supplier](https://klappir-static.s3.amazonaws.com/img/learn/Data-import-register+new+supplier.png)

  4. In the pop up you need to enter the name of the new data source and enter a Registration number.
  
![Data sources activation](https://klappir-static.s3.amazonaws.com/img/learn/Data-Importing-New+datasource.png)

  5. Click Confirm to complete the registration of the New Supplier.
  6. The new data source will now appear in the selection box. If not, something didn’t work in the creation of the new data source.
  7. Next you need to Select Company ID by using the drop down arrow. If more than one company is available, ensure that you are selecting the appropriate company for the datasets you are importing.

![Data sources selecting](https://klappir-static.s3.amazonaws.com/img/learn/Data-Importing-Selecting+datasource.png)
  
**How to set up the import template and import the datasets**
  1. Download the Template for the dataset you want to import unless your Klappir account manager provided the templates.	
  2. Copy your supplier dataset into the Klappir import template and be sure to align the data in the correct columns. The database tables are strictly setup for these templates only.
  3. Copy the dataset from template and paste into the import tool starting in the first cell.
  
![Data importing copy and paste](https://klappir-static.s3.amazonaws.com/img/learn/Data-Import-Copy+dataset.png)

  4. The last line will remain blank. You must delete this line prior to Uploading the data by clicking the red X on the right side of the cells.
  5. Click the Upload button to complete the import.

## Deleting Data

**How to delete Data**

Deleting the imported data will occasionally be required. If the supplier makes an adjustment to the dataset after it has been imported, then deleting and importing the new dataset is the only option to be certain there is no repeat data.

![Data deletion](https://klappir-static.s3.amazonaws.com/img/learn/Data-Delete+data.png) 

  1. Use the **+** to the left of the date to open the transactional data from that import and review.
  2. If necessary, delete the selected dataset import with the **Delete** button.
