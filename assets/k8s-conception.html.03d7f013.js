import{_ as t,r,o as p,c as a,a as e,d as i,e as n,b as o}from"./app.6951aaec.js";const c={},d=n("<p>k8s\u4E00\u4E9B\u6982\u5FF5(\u6536\u96C6)</p><ul><li><p>\u8D44\u6E90\u5BF9\u8C61<br> K8S \u7684\u64CD\u4F5C\u5B9E\u4F53\uFF0C\u5728 K8S \u4E2D\uFF0C\u6709\u5F88\u591A\u7684\u64CD\u4F5C\u5BF9\u8C61\uFF0C\u6BD4\u5982\u5BB9\u5668\u3001Pod\u3001Deployment\u3001Service\u3001Node \u7B49\uFF0C\u6211\u4EEC\u7EDF\u7EDF\u79F0\u5B83\u4EEC\u4E3A\u8D44\u6E90\u5BF9\u8C61\u3002</p></li><li><p>Cluster<br> K8S \u96C6\u7FA4\uFF0C\u662F\u8BA1\u7B97\u3001\u5B58\u50A8\u548C\u7F51\u7EDC\u8D44\u6E90\u7684\u96C6\u5408\uFF0CK8S \u57FA\u4E8E\u8FD9\u4E9B\u8D44\u6E90\u6765\u627F\u8F7D\u5BB9\u5668\u5316\u7684\u5E94\u7528\u3002</p></li><li><p>Master<br> K8S \u96C6\u7FA4\u7684\u5927\u8111\uFF0C\u8D1F\u8D23\u6574\u4E2A\u96C6\u7FA4\u7684\u7BA1\u63A7\u3001\u8D44\u6E90\u8C03\u5EA6\u3002\u53EF\u4EE5\u90E8\u7F72\u5728\u666E\u901A\u7269\u7406\u673A\u6216\u865A\u62DF\u673A\u4E0A\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u9AD8\u53EF\u7528\uFF0C\u53EF\u4EE5\u90E8\u7F72\u591A\u4E2A Master\u3002</p></li><li><p>Node<br> K8S \u96C6\u7FA4\u7684\u6267\u884C\u8005\uFF0C\u53D7 Master \u6307\u6325\uFF0C\u8D1F\u8D23\u8FD0\u884C\u548C\u76D1\u63A7\u5BB9\u5668\u5E94\u7528\u3001\u7BA1\u7406\u5BB9\u5668\u7684\u751F\u547D\u5468\u671F\uFF0C\u5E76\u5411 Master \u5B9A\u671F\u6C47\u62A5\u5BB9\u5668\u7684\u72B6\u6001\u3002\u540C\u6837\uFF0CNode \u4E5F\u53EF\u4EE5\u90E8\u7F72\u5728\u7269\u7406\u673A\u6216\u865A\u62DF\u673A\u4E4B\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u90E8\u7F72\u591A\u4E2A\u3002</p></li><li><p>Pod<br> \u5728 K8S \u96C6\u7FA4\u4E2D\uFF0CPod \u662F\u8D44\u6E90\u8C03\u5EA6\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u4E00\u4E2A Pod \u53EF\u4EE5\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668\u5E94\u7528\uFF0C\u8FD9\u4E9B\u5BB9\u5668\u5E94\u7528\u5F7C\u6B64\u4E4B\u95F4\u5B58\u5728\u67D0\u79CD\u5F3A\u5173\u8054\u3002Pod \u5185\u7684\u6240\u6709\u5BB9\u5668\u5E94\u7528\u5171\u4EAB\u8BA1\u7B97\u3001\u5B58\u50A8\u3001\u7F51\u7EDC\u8D44\u6E90\u3002</p></li><li><p>Controller<br> Controller \u662F K8S \u4E2D\u8D1F\u8D23\u7BA1\u7406 Pod \u7684\u8D44\u6E90\u5BF9\u8C61\uFF0C\u5B83\u5B9A\u4E49 Pod \u7684\u90E8\u7F72\u5C5E\u6027\uFF0C\u6BD4\u5982\u6709\u51E0\u4E2A\u526F\u672C\uFF0C\u526F\u672C\u5F02\u5E38\u600E\u4E48\u5904\u7406\u7B49\uFF0C\u5982\u679C\u628A Pod \u526F\u672C\u770B\u505A\u662F\u4E00\u4E2A\u516C\u53F8\u804C\u5458\uFF0C\u90A3\u4E48 Controller \u5C31\u50CF\u662F HR\uFF0C\u4F1A\u4E0D\u65AD\u6839\u636E\u4EBA\u5458\u7684\u53D8\u52A8\u6765\u62DB\u4EBA\u6EE1\u8DB3\u516C\u53F8\u7684\u53D1\u5C55\u9700\u6C42\u3002</p></li></ul><p>\u4E3A\u4E86\u6EE1\u8DB3\u591A\u79CD\u4E1A\u52A1\u573A\u666F\uFF0CK8S \u63D0\u4F9B\u4E86\u591A\u79CD Controller\uFF0C\u5305\u62EC Deployment\u3001ReplicaSet\u3001DaemonSet\u3001StatefulSet\u3001Job \u7B49\u3002</p><ul><li><p>Deployment<br> Deployment \u662F\u6700\u5E38\u7528\u7684 Controller\uFF0C\u5B9A\u4E49\u4E86\u7528\u6237\u7684\u671F\u671B\u573A\u666F\uFF0C\u5B9E\u73B0\u4E86 Pod \u7684\u591A\u526F\u672C\u7BA1\u7406\uFF0C\u5982\u679C\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u6709\u4E00\u4E2A\u526F\u672C\u6302\u4E86\uFF08\u5458\u5DE5\u79BB\u804C\uFF09\uFF0C\u90A3\u4E48 K8S \u4F1A\u6839\u636E Deployment \u7684\u5B9A\u4E49\u91CD\u65B0\u62C9\u8D77\u4E00\u4E2A\u526F\u672C\u7EE7\u7EED\u5DE5\u4F5C\uFF08\u62DB\u4E00\u4E2A\u65B0\u5458\u5DE5\uFF09\uFF0C\u59CB\u7EC8\u4FDD\u8BC1 Pod \u6309\u7167\u7528\u6237\u671F\u671B\u7684\u72B6\u6001\u8FD0\u884C\u3002</p></li><li><p>ReplicaSet<br> ReplicaSet \u548C Deployment \u5B9E\u73B0\u4E86\u540C\u6837\u7684\u529F\u80FD\uFF0C\u786E\u5207\u7684\u8BF4\u662F Deployment \u901A\u8FC7 ReplicaSet \u6765\u5B9E\u73B0 Pod \u7684\u591A\u526F\u672C\u7BA1\u7406\u3002\u6211\u4EEC\u901A\u5E38\u4E0D\u9700\u8981\u76F4\u63A5\u4F7F\u7528 ReplicaSet\u3002</p></li><li><p>DaemonSet<br> DaemonSet \u7528\u4E8E\u6BCF\u4E2A Node \u6700\u591A\u53EA\u8FD0\u884C\u4E00\u4E2A\u526F\u672C\u7684\u573A\u666F\uFF0C\u901A\u5E38\u7528\u4E8E\u8FD0\u884C Daemon\u3002</p></li><li><p>Job<br> Job \u7528\u4E8E\u8FD0\u884C\u7ED3\u675F\u5C31\u5220\u9664\u7684\u5E94\u7528\uFF0C\u800C\u5176\u4ED6 Controller \u5219\u662F\u4F1A\u957F\u671F\u4FDD\u6301\u8FD0\u884C\u3002</p></li><li><p>StatefulSet<br> \u4EE5\u4E0A Controller \u90FD\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\u526F\u672C\u7684\u72B6\u6001\u4FE1\u606F\u4F1A\u6539\u53D8\uFF0C\u6BD4\u5982\u5F53\u67D0\u4E2A Pod \u526F\u672C\u5F02\u5E38\u91CD\u542F\u65F6\uFF0C\u5176\u540D\u79F0\u4F1A\u6539\u53D8\u3002StatefulSet \u63D0\u4F9B\u6709\u72B6\u6001\u7684\u670D\u52A1\uFF0C\u80FD\u591F\u4FDD\u8BC1 Pod \u7684\u6BCF\u4E2A\u526F\u672C\u5728\u5176\u751F\u547D\u5468\u671F\u4E2D\u540D\u79F0\u4FDD\u6301\u4E0D\u53D8\u3002\u8FD9\u662F\u901A\u8FC7\u6301\u4E45\u5316\u7684\u5B58\u50A8\u5377\u6765\u5B9E\u73B0\u7684\u3002</p></li><li><p>Label<br> Label \u5B9A\u4E49\u4E86\u5176\u4ED6\u8D44\u6E90\u5BF9\u8C61\u6240\u5C5E\u7684\u6807\u7B7E\uFF0C\u7C7B\u4F3C\u4E8E\u4F60\u5728\u516C\u53F8\u88AB\u5206\u5230 A \u5C0F\u7EC4\u3001B \u5C0F\u7EC4\u3002\u6709\u4E86\u6807\u7B7E\uFF0C\u5C31\u53EF\u4EE5\u9488\u5BF9\u6027\u5730\u5BF9\u6BCF\u4E2A\u5C0F\u7EC4\u8FDB\u884C\u7BA1\u7406\u3002\u6BD4\u5982\u628A\u67D0\u4E2A\u5C0F\u7EC4\u642C\u5230\u54EA\u4E2A\u529E\u516C\u533A\uFF08\u628A\u67D0\u4E2A Pod \u90E8\u7F72\u5230\u54EA\u4E2A Node \u4E0A\uFF09\u3002\u7ED9\u6307\u5B9A\u7684\u8D44\u6E90\u5BF9\u8C61\u5B9A\u4E49\u4E00\u4E2A\u6216\u591A\u4E2A\u4E0D\u540C\u7684\u6807\u7B7E\u80FD\u591F\u5B9E\u73B0\u591A\u7EF4\u5EA6\u7684\u8D44\u6E90\u5206\u7EC4\u7BA1\u7406\uFF0C\u65B9\u4FBF\u8FDB\u884C\u8D44\u6E90\u5206\u914D\u3001\u8C03\u5EA6\u3001\u914D\u7F6E\u3001\u90E8\u7F72\u7B49\u7BA1\u7406\u5DE5\u4F5C\u3002</p></li><li><p>Selector<br> Label \u9009\u62E9\u5668\uFF0CK8S \u901A\u8FC7 Selector \u6765\u8FC7\u6EE4\u7B5B\u9009\u6307\u5B9A\u7684\u8D44\u6E90\u5BF9\u8C61\uFF0C\u7C7B\u4F3C\u4E8E SQL \u8BED\u53E5\u4E2D\u7684 where \u67E5\u8BE2\u6761\u4EF6\uFF0CLabel \u5B9E\u73B0\u4E86\u7B80\u5355\u53C8\u901A\u7528\u7684\u5BF9\u8C61\u67E5\u8BE2\u673A\u5236\u3002</p></li><li><p>Service<br> \u5728 K8S \u4E2D\uFF0CService \u662F\u5BF9 Pod \u5BF9\u8C61\u7684\u62BD\u8C61\uFF0C\u901A\u5E38\uFF0CPod \u4F1A\u4EE5\u591A\u526F\u672C\u7684\u5F62\u5F0F\u90E8\u7F72\uFF0C\u6BCF\u4E2A Pod \u90FD\u6709\u81EA\u5DF1\u7684 IP\uFF0C\u90FD\u53EF\u4EE5\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u4F46 Pod \u662F\u8106\u5F31\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5B83\u968F\u65F6\u90FD\u6709\u53EF\u80FD\u88AB\u9891\u7E41\u5730\u9500\u6BC1\u548C\u91CD\u542F\uFF0CIP \u4E5F\u4F1A\u968F\u4E4B\u6539\u53D8\uFF0C\u8FD9\u6837\uFF0C\u670D\u52A1\u7684\u8BBF\u95EE\u5C31\u4F1A\u51FA\u73B0\u95EE\u9898\u3002 Service \u5C31\u662F\u63D0\u51FA\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u7684\uFF0C\u5B83\u5B9A\u4E49\u4E86\u4E00\u4E2A\u865A\u62DF IP\uFF08\u4E5F\u53EB\u96C6\u7FA4 IP\uFF09\uFF0C\u8FD9\u4E2A IP \u5728 Service \u7684\u6574\u4E2A\u751F\u547D\u5468\u671F\u5185\u90FD\u4E0D\u4F1A\u6539\u53D8\u3002\u5F53\u6709\u8BBF\u95EE\u5230\u8FBE\u65F6\uFF0CService \u4F1A\u5C06\u8BF7\u6C42\u5BFC\u5411 Pod\uFF0C\u5982\u679C\u5B58\u5728\u591A\u4E2A Pod\uFF0CService \u8FD8\u80FD\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861\u3002</p></li><li><p>Volume<br> K8S \u7684\u5B58\u50A8\u5377\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A Pod \u4E2D\u591A\u4E2A\u5BB9\u5668\u53EF\u8BBF\u95EE\u7684\u5171\u4EAB\u76EE\u5F55\u3002\u548C Docker \u7684 Volume \u4E0D\u592A\u4E00\u6837\u7684\u662F\uFF0CK8S \u7684 Volume \u662F\u4EE5 Pod \u4E3A\u5355\u4F4D\u7684\uFF0C\u4E5F\u5C31\u662F Volume \u7684\u751F\u547D\u5468\u671F\u548C Pod \u76F8\u5173\uFF0C\u548C Pod \u5185\u7684\u5BB9\u5668\u4E0D\u76F8\u5173\uFF0C\u5373\u4F7F\u5BB9\u5668\u7EC8\u6B62\u6216\u91CD\u542F\uFF0CVolume \u4E2D\u7684\u6570\u636E\u4E5F\u4E0D\u4F1A\u4E22\u5931\uFF0C\u53EA\u6709\u5F53 Pod \u88AB\u5220\u9664\u65F6\uFF0C\u6570\u636E\u624D\u4F1A\u4E22\u5931\u3002</p></li><li><p>Namespace<br> \u5F53\u6709\u591A\u4E2A\u7528\u6237\u6216\u79DF\u6237\u4F7F\u7528\u540C\u4E00\u4E2A K8S \u96C6\u7FA4\u65F6\uFF0C\u5982\u4F55\u533A\u5206\u5B83\u4EEC\u521B\u5EFA\u7684\u8D44\u6E90\u5462\uFF1F\u7B54\u6848\u5C31\u662F Namespace\u3002 Namespace \u5C06\u4E00\u4E2A\u7269\u7406\u7684\u96C6\u7FA4\u4ECE\u903B\u8F91\u4E0A\u5212\u5206\u6210\u591A\u4E2A\u865A\u62DF\u7684\u96C6\u7FA4\uFF0C\u6BCF\u4E2A\u96C6\u7FA4\u5C31\u662F\u4E00\u4E2A Namespace\uFF0C\u4E0D\u540C Namespace \u91CC\u7684\u8D44\u6E90\u662F\u5B8C\u5168\u9694\u79BB\u7684\u3002\u6BCF\u4E2A\u7528\u6237\u5728\u81EA\u5DF1\u521B\u5EFA\u7684 Namespace \u91CC\u64CD\u4F5C\uFF0C\u90FD\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u7528\u6237\u3002</p></li><li><p>Annotation<br> Annotation \u4E0E Label \u7C7B\u4F3C\uFF0C\u4F46\u548C Label \u4E0D\u540C \u7684\u4E8B\uFF0CAnnotation \u4E0D\u7528\u4E8E\u8FC7\u6EE4\u7B5B\u9009\uFF0C\u5B83\u53EA\u662F\u7528\u6237\u5B9A\u4E49\u7684\u67D0\u4E00\u79CD\u8D44\u6E90\u7684\u9644\u52A0\u4FE1\u606F\uFF0C\u76EE\u7684\u662F\u65B9\u4FBF\u5916\u90E8\u67E5\u627E\u8BE5\u8D44\u6E90\u3002\u6709\u70B9\u7C7B\u4F3C\u4E8E\u6211\u4EEC\u5E38\u8BF4\u7684\u522B\u540D\uFF0C\u6CA1\u6709\u5B83\u5B8C\u5168\u53EF\u4EE5\uFF0C\u4F46\u6709\u4E86\u5B83\u53EF\u4EE5\u5F88\u65B9\u4FBF\u67E5\u627E\u3002</p></li></ul>",4),s=o("\u8D44\u6599\u6765\u6E90\uFF1A "),S={href:"https://www.cnblogs.com/bakari/p/10494834.html",target:"_blank",rel:"noopener noreferrer"},m=o("Kubernetes \u7B14\u8BB0 03 \u626B\u6E05\u6982\u5FF5");function b(P,_){const l=r("ExternalLinkIcon");return p(),a("div",null,[d,e("p",null,[s,e("a",S,[m,i(l)])])])}var K=t(c,[["render",b],["__file","k8s-conception.html.vue"]]);export{K as default};
