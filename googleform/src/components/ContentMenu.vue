<template>
    <div>
        <!-- 헤더 -->
        <header/>
        <!-- 양식 -->
        <div class="forms">
            <h3>새 양식시작하기</h3>
            <div class="formsWrap">
                <div>
                    <router-link to="/ground">
                        <p><img src="../assets/googleplus.png" alt=""></p>
                        <p>내용없음</p>
                    </router-link>
                </div>
                <div>
                    <p><img src="" alt=""></p>
                    <p>내용없음</p>
                </div>
                <div>
                    <p><img src="" alt=""></p>
                    <p>내용없음</p>
                </div>
            </div>
        </div>
        <!-- 목록 -->
        <div class="myForms">
            <ul class="myformsWrap">
                <li>
                    <div>
                        <h4>제목</h4>
                    </div>
                    <div>
                        <h4>작성자</h4>
                    </div>
                    <div>
                        <h4>업데이트</h4>
                    </div>
                    <div>
                        <h4>상태</h4>
                    </div>
                    <div></div>
                </li>
                <li>
                    <div>
                        제목
                    </div>
                    <div>
                        작성자
                    </div>
                    <div>
                        -
                    </div>
                    <div>
                        <select>
                            <option value="">작성중</option>
                            <option value="">게시</option>
                            <option value="">마감</option>
                            <option value="">완료</option>
                        </select>
                    </div>
                    <div>
                        <span class="material-symbols-outlined">more_vert</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
    .forms{background:#ebebeb;padding:20px 50px 50px; }
    .formsWrap{display:flex;}
    .formsWrap p{width:200px;margin:0 10px; background:#fff;text-align:center;}
    .myformsWrap>li{padding:0 90px; display:flex;align-items:center;justify-content: space-between;}
</style>