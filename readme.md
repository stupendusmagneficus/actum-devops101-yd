1. Prerequisites for the demo
    - NodeJs https://nodejs.org/en/download
    - Visual Studio Code https://code.visualstudio.com/download
    - GitHub account created https://github.com/
1. Steps
    1. Fork repository https://github.com/mgjam/actum-devops101 into your own repository
    1. Set `storageAccounts_name` in `ops/iac/main.parameters-dev.json`
    1. Push your repository to GitHub
    1. Get Access into https://dev.azure.com/mgatyas/DevOps%20101
    1. Create service connection to your repository
    1. Create build pipeline
    1. Create release pipeline
        - Define storageAccountName variable for the release pipeline
    1. Get Access into https://portal.azure.com/#@actum.cz/resource/subscriptions/71a1b525-14cd-44fa-bbb9-f58562281a35/overview
    1. Enable static website hosting on created storage account
1. Resources used to prepare the demo
    - Create sample NextJS app
        - https://nextjs.org/learn/foundations/from-react-to-nextjs/getting-started-with-nextjs
    - Add e2e testing
        - https://nextjs.org/docs/testing
        - https://docs.cypress.io/guides/getting-started/installing-cypress
    - Prepare for static HTML export deployment
        - https://nextjs.org/docs/deployment
        - https://nextjs.org/docs/advanced-features/static-html-export
    - Prepare Storage account
        - https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-overview
        - Allow static website hosting https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-how-to?tabs=azure-portal
    - Define yaml ci/cd templates
        - https://learn.microsoft.com/en-us/azure/devops/pipelines/yaml-schema/?view=azure-pipelines&tabs=schema&viewFallbackFrom=azure-devops