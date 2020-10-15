import * as k8s from "@pulumi/kubernetes";
function addNamespace(o: any) {
    if (o !== undefined) {
        if (o.metadata !== undefined) {
            o.metadata.namespace = "naveen";
        } else {
            o.metadata = {namespace: "naveen"}
        }
    }
}
const nameSpace = new k8s.core.v1.Namespace("naveen",{
    metadata: {
        name : "naveen",
        labels : {
            "istio-injection" : "enabled"
        }
    }
})

const codeServer = new k8s.helm.v3.Chart("code", {
    path : "./charts/code-server",
    namespace : "naveen",
    values :{
        namespace : "naveen",
        name : "code-server"
    },
    transformations: [addNamespace]
},{ dependsOn: nameSpace } )
export const name = codeServer.urn;
