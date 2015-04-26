    //         jQuery: Navigation
$(document).ready(function(){
// First name hint
    $('.fName').focus(function() {
        if ($(this).val() == 'John')
            $(this).val('');
    });
    $('.fName').blur(function() {
        if($(this).val() == '')
            $(this).val('John');
    });
// Last name hint
    $('.lName').focus(function() {
        if ($(this).val() == 'Doe')
            $(this).val('');
    });
    $('.lName').blur(function() {
        if($(this).val() == '')
            $(this).val('Doe');
    });
// Email hint
    $('.email').focus(function() {
        if ($(this).val() == 'e.g. johndoe@email.com')
            $(this).val('');
    });
    $('.email').blur(function() {
        if($(this).val() == '')
            $(this).val('e.g. johndoe@email.com');
    });
// Password hint
    $('.password').focus(function() {
        if ($(this).val() == 'a-z, 0-9, and/or underscore ("_")')
            $(this).val('');
    });
    $('.password').blur(function() {
        if($(this).val() == '')
            $(this).val('a-z, 0-9, and/or underscore ("_")');
    });
// Date hint
    $('.date').focus(function() {
        if ($(this).val() == 'MM/DD/YYYY')
            $(this).val('');
    });
    $('.date').blur(function() {
        if($(this).val() == '')
            $(this).val('MM/DD/YYYY');
    });
//Load defaults
   $('.subNav, .subNav2').hide();
//Display Toggle On/Off
   $('.dropdown_lvl1, .dropdown_lvl1 *').hover(function(){
       $('.subNav').toggle();
   });
    $('.dropdown_lvl2, .dropdown_lvl2 *').hover(function(){
        $('.subNav2').toggle();
    });
// Border Radius Styling
    $('nav>ul>li>a>p').addClass('rowRadiusTop');
    $('.signup').addClass('rowRadiusTop').addClass('rowRadiusBottom');
    $('nav ul.subNav > li:last-child a>p').addClass('rowRadiusBottom');
// Submit buttons
    $('.login_submit').submit();
// Password checker
    $('re-type').focus(function(){
        do{
            if('.re-type'.val()!='.password'.val()){
                console.log("Passwords don't match");
            }
            else{
                console.log('Passwords match');
            }
        }while ('.re-type'.val()!='.password'.val());
    });
// Tr color by even
    $('#tags_table .header').css('background-color', '#B1AFB2');
// Hover highlight
    $('#tags_table tr').mouseover(function(){
        $(this).addClass('row_highlight');
    }).mouseout(function(){
        $(this).removeClass('row_highlight');
    });
//Login
    $('#login_submit').click(function(){
    var user = $('#user').val();
    var password = $('#password').val();
    console.log('run');
    $.ajax({
        url:'xhr/login.php',
        data:{
            username: 'student',
            password: 'password'
        },
        type:'post',
        dataType: 'json',
        success: function(response){
            //call the page ../admin.html
            console.log('works');
            console.log(response.user.id);
            window.location.assign("admin.html");
        }
    });  
});

});

