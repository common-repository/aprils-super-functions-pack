/*
* Skeleton V1.1
* Copyright 2011, Dave Gamache
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/


jQuery( document ).ready( function( $ ){
    $('body').on('click', 'ul.asfptabs > li > a', function(e) {

        //Get Location of tab's content
        var contentLocation = $(this).attr('href');
        parentid = $(this).parent().parent().parent().attr('id');

        //Let go if not a hashed one
        if(contentLocation.charAt(0)=="#") {

            e.preventDefault();

            //Make Tab Active
            $(this).parent().siblings().children('a').removeClass('active');
            $(this).addClass('active');

            //Show Tab Content & add active class
            $('#'+parentid+' '+contentLocation).show().addClass('active').siblings().hide().removeClass('active');

        }
    });
});