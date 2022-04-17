---
title: "LINE chat bot"
excerpt: "LINE chat bot service with Azure(QnA maker and Azure bot service)<br/><img src='/images/azure_chat_bot.png'>"
collection: portfolio
---


This chat bot service is developed using Azure [QnA maker](https://www.qnamaker.ai/) (one of the cognitive service) and [Azure bot service](https://azure.microsoft.com/en-us/services/bot-services/). I integrated with LINE(chat tool) and QnA maker because I expect that this product is designed for people who lived in rural regin(like my hometown). 

## Architecture
here is architecture of this chat bot.
<br/><img src='/images/azure_architecture.png'>

## Procedure
* Create QnA maker
* Add knowledge to QnA
* Create chat bot via QnA portal
* Indegrate with external tool(LINE)

## For better experience
* Add more Knowledge to QnA maker to response more accurate answer.
* Fixed Azure bot service to handle unexpected question.
* Implement via Terraform. 

## Demo
<div><video width="800" height="500" controls src="/images/azure_chat_bot_demo.mp4" muted="false"></video></div>

