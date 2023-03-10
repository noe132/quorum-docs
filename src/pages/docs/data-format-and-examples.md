---
title: 数据格式和例子
---

理论上你可以往 Quorum 提交任意格式的数据。

为了不同应用之间的数据保持一致，从而可以互相通信，我们推荐使用的格式是 [ActivityPub](https://www.w3.org/TR/activitypub/)，知名的长毛象应用也是使用这个格式。

接下来我们通过各种各样的真实场景，制定数据格式并提交到 Quorum

---

## 创建文章

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Create",
    object : {
      type: "Note",
      id: "1",
      content: "hello world",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Create",
    "object" : {
      "type": "Note",
      "id": "1",
      "content": "hello world",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Note](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note)

## 创建带图片的文章

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Create",
    object : {
      type: "Note",
      id: "1",
      content: "hello world",
      image: [{
        type: "Image",
        name: "blue sky",
        mediaType: "image/jpeg"
        content: "data:image/jpeg;base64,/9j/4AA..."
      }]
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Create",
    "object" : {
      "type": "Note",
      "id": "1",
      "content": "hello world",
      "image": [{
        "type": "Image",
        "name": "blue sky",
        "mediaType": "image/jpeg"
        "content": "data:image/jpeg;base64,/9j/4AA..."
      }]
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Note](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-note), [ActivityPub#Image](https://www.w3.org/TR/activitystreams-vocabulary/#ex80-jsonld)

## 删除文章

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Delete",
    object : {
      type: "Note",
      id: "1",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Delete",
    "object" : {
      "type": "Note",
      "id": "1",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Delete](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-delete)

## 更新文章

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Update",
    object : {
      type: "Note",
      id: "1",
    },
    result: {
      type: "Note",
      content: "hello world (edit)",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Update",
    "object" : {
      "type": "Note",
      "id": "1",
    },
    "result": {
      "type": "Note",
      "content": "hello world (edit)",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Update](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-update)

## 点赞

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Like",
    object : {
      type: "Note",
      id: "1",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Like",
    "object" : {
      "type": "Note",
      "id": "1",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Like](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like)

## 点踩

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Dislike",
    object : {
      type: "Note",
      id: "1",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Dislike",
    "object" : {
      "type": "Note",
      "id": "1",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Dislike](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-dislike)

## 评论

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Create",
    object : {
      type: "Note",
      id: "2",
      content: "awesome !!!",
      inreplyto: {
        type: "Note",
        id: "1"
      }
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Create",
    "object" : {
      "type": "Note",
      "id": "2",
      "content": "awesome !!!",
      "inreplyto": {
        "type": "Note",
        "id": "1"
      }
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#inreplyto](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-inreplyto)

## 个人资料

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Create",
    object : {
      type: "Person",
      id: "user eth address",
      name: "Jack"
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Create",
    "object" : {
      "type": "Person",
      "id": "user eth address",
      "name": "Jack"
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Create](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

## 关注

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Follow",
    object : {
      type: "Person",
      id: "user eth address",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Follow",
    "object" : {
      "type": "Person",
      "id": "user eth address",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Follow](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

## 取关

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Ignore",
    object : {
      type: "Person",
      id: "user eth address",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Ignore",
    "object" : {
      "type": "Person",
      "id": "user eth address",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Ignore](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)

## 屏蔽

{% tabs %}

{% tab label="Javascript" %}
```javascript
const SDK = require('rum-sdk-nodejs');
const group = SDK.cache.Group.add('rum://...');
SDK.chain.Trx.create({
  data: {
    type: "Block",
    object : {
      type: "Person",
      id: "user eth address",
    }
  },
  groupId: group.groupId,
  privateKey: '...'
});
```
{% /tab %}

{% /tabs %}

```json
// 上链之后的数据
{
  "Data": {
    "type": "Block",
    "object" : {
      "type": "Person",
      "id": "user eth address",
    }
  },
  "TrxId": "...",
  "GroupId": "...",
  "TimeStamp": "...",
  "Version": "1.0.0",
  "Expired": 1672284016463,
  "Nonce": 1,
  "SenderPubkey": "...",
  "SenderSign": "..."
}

```

参考：[ActivityPub#Block](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block), [ActivityPub#Person](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person)