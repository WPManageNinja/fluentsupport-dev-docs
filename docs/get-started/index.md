# What is Fluent Support?
###
<Badge type="info" text="Fluent Support Core" /> <Badge type="tip" text="Basic" />

Fluent Support is go-to helpdesk plugin for unparalleled customer support. Effectively manage and resolve customer queries with ease. This powerful plugin empowers you to create a seamless support experience, allowing you to handle tickets, provide timely responses, and streamline communication effortlessly.

## Fluent Support Versions

Fluent Support comes in different versions:

**Fluent Support Core** is the free version of Fluent Support. It has all the basic features to create support ticket.

**Fluent Support Pro** is the premium version of Fluent Support. It has all the advanced features to create support ticket.

## Directory Structure

```yml
├── app
│   ├── Api                  # Contains PHP API Utility classes
│   └── Hooks                # Action and Filter Hooks
│   └── Http                 # REST API routes, controllers, policies
│   └── Models               # Database Models
│   └── Modules              # Modules
│   └── Services             # Module Services
│   └── Views                # Php view files
│   └── App.php     
│
├── assets                   # contains css,js, media files
├── boot                     # [internal] contains plugin boot files
├── config                   # [internal] contains plugin config files
├── database                 # [internal] Database migration files
├── language                 # [internal] Language Files
├── resource                 # [internal] Resource Files
├── vendor                   # [internal] Core Framework Files
│
└── fluent-support.php       # Plugin entry File
```