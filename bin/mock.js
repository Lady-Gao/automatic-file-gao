exports.tmepvue=function(){
    return `<template>
    <div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import "../style/index.css";

</style>`
}

exports.indexJs=function(fileName){
    return `import ${fileName} from "./src/${fileName}.vue";
export default ${fileName};`
}

exports.indexCss=function(){
    return `/**css*/`
}