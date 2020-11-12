---
menu: Klappir Platform
route: /klappir_platform
name: Platform
---

# The Klappir Platform

## The Platform Menu

The Klappir Platform is found @ [core.klappir.io(https://core.klappir.io/)]. First you will encounter a login popup -- enter your login credintials then click Log in button. The account is created by your dedicated account manager after the purchase or for the trial of the system. Your account name will appear as the first item and the four primary menu items will present below the account name (menu image).

At the top of the opening screen is the module Menu bar. You will select the modules you want to use by clicking the icons. EnviroMaster (leaf icon) is the primary module for most of our users, but many users have multiple modules in play and navigate between them easily (bar image).

## Users

### How to add users

No one wants to do this work alone. Your organization will probably have a few other people who need to be added to the system to help manage the assets, import data from suppliers, and analyse the consumption charts. (image Users-Roles)

  1. Click Users in the side menu to open the Users manager.
  2. Select the role of the new User to be invited. 
      a. The Admin role is for the users who will be managing assets, data and statements.
      b. Standard role is for the users who will only review the Dashboard and Insights.
  3. Click the Invite People button on the right side to open the pop up.
  4. Select the Role and enter the email address of the new user.
  5. Send invitation to complete the user invite. (image Users-Invite send)


## Data

### Overview

The Data Overview provides a dashboard view of the datasets in the tool by consumption category. The imported data and the streamed data directly from APIs is reviewable as transactional data under each category. You can select the year filter for review. Each Category is clickable and open the transactional data in detail.

There are consumption categories that provide data here that is not currently visable in the Platform Dashboard or the Insights analytics. Those categories are:
    - Transport - flights
    - Transport - trips
    - Print - paper
    - Cargo
    - Gas
 (image Data-overview-dashboard)

### Data Sources

The Data Sources are Klappir's term for the suppliers and services that your organization is utilizing for the emissions inventory. The consumption data provided by your suppliers can be streamed into the Klappir Platform via APIs or by manually importing datasets from the suppliers.(image Data-Data sources-iceland)

If an API is set up from your supplier or provider, you will find the company logo and name under the specific category (fuel, waste, water, etc.).

  1. Click the supplier line to open the supplier card.
  2. If this is the first time you are setting up the data sources, you need to Activate the connection by clicking the button. (image data sources – Activate)
  3. Once activated you can monitor the status of the data source in terms of the frequency of data supply and the most recent update. (image Data-Data sources-supplier card)
  
### Importing Data

When you need to import datasets manually, it is important to have an extensive list of the suppliers and services you need to create as a data source in the Platform. The consumption datasets that you will be importing need to have a data source to connect the data to. Once a service provider is created it will be available in the dropdown list for future data importing. (image Data-Importing data-categories)

**How to set up new Data Sources**
  1. Click the Import Data to open the importing tool.
  2. Choose the type of data you are importing by clicking the icon.
  3. If this is the first time you are importing data for a specific data source, you need to **+ Register New Supplier** (image Import Data-Register
  4. In the pop up you need to enter the name of the new data source and enter a Registration number. (image Data-Importing-New datasource)
  5. Click Confirm to complete the registration of the New Supplier.
  6. The new data source will now appear in the selection box. If not, something didn’t work in the creation of the new data source.
  7. Next you need to Select Company ID by using the drop down arrow. If more than one company is available, ensure that you are selecting the appropriate company for the datasets you are importing. (image Data-Importing-Selecting datasource)
  
**How to set up the import template and import the datasets**
  1. Download the Template for the dataset you want to import unless your Klappir account manager provided the templates.	
  2. Copy your supplier dataset into the Klappir import template and be sure to align the data in the correct columns. The database tables are strictly setup for these templates only.
  3. Copy the dataset from template and paste into the import tool starting in the first cell. (image Data-Importing-Copy datasets)
  4. The last line will remain blank. You must delete this line prior to Uploading the data by clicking the red X on the right side of the cells.
  5. Click the Upload button to complete the import.

### Deleting Data

**How to delete Data**

Deleting the imported data will occasionally be required. If the supplier makes an adjustment to the dataset after it has been imported, then deleting and importing the new dataset is the only option to be certain there is no repeat data. (image Data-Delete data) 

  1. Use the **+** to the left of the date to open the transactional data from that import and review.
  2. If necessary, delete the selected dataset import with the **Delete** button.

## Systems

Subsystems are crucial for organizations that want to track emissions inventories over multiple companies or divisions. Subsystems allow users to view data be individual subsystems, as well as combined into the parent company overall. Users can select the subsystems in the hierarchical structure to review that system’s account.

Users assigned to specific subsystems only have access to that subsystem data and analytics. Users assigned to the Patent account have access and overview of all systems.

## Files

The Platform Document Manager is used to add documents to the projects. The documents used for compliance and conformity of International Standards such as ISO 14001 or ISO 50001 or for ships at sea providing documents to port masters.
