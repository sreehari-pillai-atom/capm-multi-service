# Getting Started

## What does this project do ? 

This CAP project has one App router module , one DB module but multiple service instance modules. 

It contains these folders and files

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here - App router module
`db/` | your domain models and data go here
`service1/` | First service refering to the db artifacts(cds)
`service2/` | Second service refering to the db artifacts(cds)
`package.json` | project metadata and configuration
`mta.yaml` | Look the differet build configurations
`readme.md` | this getting started guide


## Step to run & deploy 

```sh
git pull https://github.com/sreehari-pillai-atom/capm-multi-service.git
npm install
cds serve
```

## Learn More

Learn more at 
- https://cap.cloud.sap/docs/get-started/.
- https://answers.sap.com/questions/13794222/capm-project-service-implementation.html?childToView=13794281 
