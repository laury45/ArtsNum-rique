jQuery(document).ready(function(){
     jQuery('#json_click_handler').click(function(){
          doAjaxRequest();
     });
});
function doAjaxRequest(){
 
     jQuery.ajax({
          url: 'http://www.votresite.com/wp-admin/admin-ajax.php',
          data:{
               'action':'do_ajax',
               'fn':'get_latest_posts',
               'count':10
               },
          dataType: 'JSON',
          success:function(data){
                 // notre gestion de l'appel sera fait ici. Nous y ajouterons le code plus tard
                             },
          error: function(errorThrown){
               alert('error');
               console.log(errorThrown);
          }
 
     });
 
}