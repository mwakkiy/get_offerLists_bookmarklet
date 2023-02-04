# get_offerLists_bookmarklet

Opensea のオファー者一覧を取得するブックマークレット

## 事前設定

ブックマークを新規作成し編集  
↓  
URL を下記に変更

```
javascript:(function(d,j,s){addImageUrl = "https://i.seadn.io/gcs/files/a4c2e1f83753a81ad0ffee3db87f6b4a.png?auto=format&w=200";s=d.createElement('script');s.src=j;d.body.appendChild(s);})(document,'https://mwakkiy.github.io/get_offerLists_bookmarklet/offer.js')
```

## 使い方

Opensea の該当コレクション → アクティビティ → 　オファー  
のページを表示する。  
https://opensea.io/ja/collection/ninjaanimals2nd/activity?search[eventTypes][0]=OFFER_ENTERED

先ほど設定したブックマークをクリック。
