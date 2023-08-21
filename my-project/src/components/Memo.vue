<template>
    <div class="Memo">
        <h3>I am Memo</h3>
        <div class="memo">
            <div class="act">
                <button class="btn btn-primary" @click="add()">+추가</button>
            </div>
            <ul>
                <li v-for="d in state.data" :key="d.id" @click="edit(d.id)">
                    {{d.content}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {reactive} from "vue";
import axios from "axios";
export default {
    setup() {
        const state = reactive({
            data :[], 
        })
       
        const add =() =>{
            //state.data.push("추가된메모내용")
            const content  =prompt("내용을입력해주세요.")
            if(!content){
                alert("내용을입력해주세요");
                //add();
            }
            axios.post("/api/memos",{content}).then((res)=>{
                //{content:content}면content로 생략가능
                state.data  =res.data

            })
        };
        
        const edit = (id) =>{
            const content  = prompt("내용을 입력",state.data[id]);
            console.log("edit::"+content);
            
            axios.put("/api/memos/"+id,{content}).then((res)=>{ 
                state.data  =res.data;
            });
        }

        axios.get("/api/memos").then((res)=>{
            state.data  =res.data
        }).catch((error) => {
            console.error("Request error:", error);
        });

        return {state,add,edit};
    },
}
</script>    
<style lang="scss" scoped>
    .memo {
        .act{
            padding:10px 5px;
            text-align:right;
        }
        ul{
            border-top:1px solid #f7f7f7;
            list-style:none;
            margin:0;
            padding:0;
        }
    }

</style>