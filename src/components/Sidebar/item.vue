
<script>
export default{
    name:'Item',
    functional:true,
    props:{
        icon:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        }
    },
    data(){
        return {}
    },
    render(h, contex){
        const {icon, title} = contex.props
        const vnodes = []
        const classStr = 'iconfont icon-'+ icon
        // 判断icon是否存在
        if(icon){
            vnodes.push(<i class={classStr}></i>)
        }
        if(title){
            vnodes.push(<span slot="title">{title}</span> )
        }
        return vnodes
    }
}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 18px;
  color: #BFCBD9;
}
</style>