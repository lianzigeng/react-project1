import styled from 'styled-components';

export const HomeWrapper = styled.div`
   width:960px;
   margin:0 auto;
   overflow:hidden;

`;

export const HomeLeft = styled.div`
   width:625px;
   margin-left:15px;
   padding-top:30px;
   float:left;
   .banner-img{
       width:625px;
       height:270px;
   }

`;

export const HomeRight = styled.div`
   width:240px;
   float:right;

`;

export const TopicWrapper =styled.div`
     padding:20px 0 10px 0;
     overflow:hidden;
     margin-left:-18px;
     border-bottom:1px solid #dcdcdc;
`;
export const TopicItem =styled.div`
     float:left;
     height:32px;
     line-height:32px;
     font-size:14px;
     color:#000;
     margin-left:18px;
     border:1px solid #dcdcdc;
     border-radius:4px;
     background:#f7f7f7;
     padding-right:10px;
     margin-bottom:8px;
     .topic-pic{
       width:32px;
       height:32px;
       display:block;
       float:left;
       margin-right:10px;
     }
`;

export const ListItem = styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
      width:125px;
      height:100px;
      float:right;
      display:block;
      border-radius:10px
    }
`;

export const ListInfo = styled.div`
      width:500px;
      float:left;
      .title{
         line-height:27px;
         font-size:18px;
         font-weight:bold;
         color:#333;
      }
      .desc{
       font-size:13px;
       line-height:24px;
       color:#999;
      }
`;