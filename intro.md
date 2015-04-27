# Ingress 指南

## 作者

{% for author in book.authors %}
  - {{ author.name }}
{% endfor %}

## 参考资料

{% for ref in book.references %}
  - [{{ ref.name }}]({{ ref.url }})
{% endfor %}

-------------

合作请联系： jamesswineson[#]gmail.com

-------------

{% include "templates/license.md" %}
