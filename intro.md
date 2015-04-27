# Ingress 中文游戏指南

## 作者

{% for author in book.authors %}
  - {{ author.name }}
{% endfor %}

## 参考资料

{% for ref in book.references %}
  - [{{ ref.name }}]({{ ref.url }})
{% endfor %}

-------------

任何问题，建议，合作撰写请求请访问[本书的 Github Repository](https://github.com/hz-ingress/ingress-tutorial) 或联系 jamesswineson[#]gmail.com 。

-------------

{% include "templates/license.md" %}
