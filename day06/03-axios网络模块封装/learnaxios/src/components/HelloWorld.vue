<template>
  <div class="hello">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  import {request} from '../network/request'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: ''
      }
    },
    created(){
      request({
        url: '/some.do',
        Headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
          'Access-Control-Allow-Origin': '*'
        }
      }).then(res => this.msg = res)
      .catch(err => console.log(err))
    }
  }
</script>
</style>
