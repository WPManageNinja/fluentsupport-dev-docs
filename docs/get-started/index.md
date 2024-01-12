# What is Fluent Support?
###
<Badge type="info" text="Fluent Support Core" /> <Badge type="tip" text="Basic" />

Fluent Support is the best support plugin to display data in tabular format. Build tables within a minute and customize however you want without coding! It’s the ultimate solution for WordPress tables.

## Fluent Support Versions

Fluent Support comes in different versions:

**Fluent Support Core** is the free version of Fluent Support. It has all the basic features to create support ticket.

**Fluent Support Pro** is the premium version of Fluent Support. It has all the advanced features to create support ticket.

## Directory Structure

```yml
├── app
│   ├── CPT                  # Custom Post Types
│   └── Hooks                # Action and Filter Hooks
│   └── Library              # Helper Classes
│   └── Http                 # REST API routes, controllers, policies
│   └── Models               # Database Models
│   └── Modules              # Modules
│   └── Services             # Module Services
│   └── Traits               # Reusable Traits
│   └── Views                # Php view files
│   └── App.php     
│   └── ComposerScript.php 
│
├── assets                   # contains css,js, media files
├── boot                     # [internal] contains plugin boot files
├── config                   # [internal] contains plugin config files
├── database                 # [internal] Database migration files
├── language                 # [internal] Language Files
├── resource                 # [internal] Resource Files
├── vendor                   # [internal] Core Framework Files
│
└── fluent-support.php         # Plugin entry File
```