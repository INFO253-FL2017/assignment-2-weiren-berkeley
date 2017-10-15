





function checkForm() {
  if (document.querySelector('#Name').value=='') {
    document.querySelector('#noticeName').innerHTML='Name can not be empty.';
  } else {
    document.querySelector('#noticeName').innerHTML='';
  }
  if (document.querySelector('#Email').value=='') {
    document.querySelector('#noticeEmail').innerHTML='Email can not be empty.';
  } else {
    document.querySelector('#noticeEmail').innerHTML='';
  }
  if (document.querySelector('#Subject').value=='') {
    document.querySelector('#noticeSubject').innerHTML='Subject can not be empty.';
  } else {
    document.querySelector('#noticeSubject').innerHTML='';
  }
  if (document.querySelector('#Message').value=='') {
    document.querySelector('#noticeMessage').innerHTML='Message can not be empty.';
  } else {
    document.querySelector('#noticeMessage').innerHTML='';
  }
  if (document.querySelector('#Name').value!=''
  && document.querySelector('#Subject').value!=''
  && document.querySelector('#Message').value!=''
  && document.querySelector('#Email').value!='') {
    document.querySelector('#noticeSuccess').innerHTML = document.querySelector('#Name').value+', your message has been sent.';
    document.getElementById("contact_form").submit();
    document.querySelector('#Name').value="";
    document.querySelector('#Email').value="";
    document.querySelector('#Subject').value="";
    document.querySelector('#Message').value="";
    document.querySelector('#Name').value="";
    document.querySelector('#Email').value="";
    document.querySelector('#Subject').value="";
    document.querySelector('#Message').value="";
  } else {
    document.querySelector('#noticeSuccess').innerHTML = '';
  }
}
function resetForm() {
  document.querySelector('#Name').value="";
  document.querySelector('#Email').value="";
  document.querySelector('#Subject').value="";
  document.querySelector('#Message').value="";
  document.querySelector('#Name').value="";
  document.querySelector('#Email').value="";
  document.querySelector('#Subject').value="";
  document.querySelector('#Message').value="";
  document.querySelector('#noticeMessage').innerHTML='';
  document.querySelector('#noticeSubject').innerHTML='';
  document.querySelector('#noticeName').innerHTML='';
  document.querySelector('#noticeSuccess').innerHTML = '';

}
