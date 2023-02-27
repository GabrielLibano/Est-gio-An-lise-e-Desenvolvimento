async function getFaturamento(){
    await fetch("Distribuidora.json").then((response)=>{
        response.json().then((fat)=>{
            for(let i=0;i<fat.faturamento;i++){
                let faturamento = fat[i]
            }
        })
    })
}