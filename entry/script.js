 /*global $*/
       var idt=0; //id ticket
       
            $(document).ready(function(){
                loadParking();
                
                
            });
            
            
            //----------------------------------------------functie care sterge toata parcarea cu vechiul status si incarca parcarea cu noul status------------
            function deleteOldStatusParking()
            {
                var myNode = document.getElementById("a");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#a').append("<button class='btn btn-default'>"+"A"+"</button>");
                
                var myNode = document.getElementById("b");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#b').append("<button class='btn btn-default'>"+"B"+"</button>");
                
                var myNode = document.getElementById("c");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#c').append("<button class='btn btn-default'>"+"C"+"</button>");
                
                var myNode = document.getElementById("d");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#d').append("<button class='btn btn-default'>"+"D"+"</button>");
                
                var myNode = document.getElementById("e");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#e').append("<button class='btn btn-default'>"+"E"+"</button>");
                
                var myNode = document.getElementById("f");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#f').append("<button class='btn btn-default'>"+"F"+"</button>");
                
                var myNode = document.getElementById("g");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#g').append("<button class='btn btn-default'>"+"G"+"</button>");
                
                var myNode = document.getElementById("h");
                while ( myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#h').append("<button class='btn btn-default'>"+"H"+"</button>");
                
                var myNode = document.getElementById("i");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#i').append("<button class='btn btn-default'>"+"I"+"</button>");
                
                var myNode = document.getElementById("j");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#j').append("<button class='btn btn-default'>"+"J"+"</button>");
                               
            }
            
            function deleteOldStatusTicket()
            {
                var myNode = document.getElementById("antet");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                $('#antet').append("<h3 >"+"PARKING TICKET"+"</h3>");
                
                var myNode = document.getElementById("floor");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                
                var myNode = document.getElementById("floor");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                
                var myNode = document.getElementById("parcel");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                
                var myNode = document.getElementById("number");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                
                var myNode = document.getElementById("date");
                while (myNode.lastChild)
                {
                    myNode.removeChild(myNode.lastChild);
                }
                
            }
            
            //------------------------------------------------------------functia care incarca tabelul cu locurile de parcare din baza de date-------------------------
            function loadParking()
            { 
                deleteOldStatusParking();
                
                $.ajax({url:'/parkingSpaces', success: function(data) {
                    for(var i = 0; i<data.length;i++) 
                    {    if(data[i].floor==0)
                        {    if(data[i].parcel.toLowerCase()=="a")
                            { 
                                if(data[i].status.toString()=="liber")
                                {
                                    $('#a').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)' >"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                    
                                }
                                else
                                {
                                    $('#a').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                }
                            }else if(data[i].parcel=="B")
                                    { 
                                        if(data[i].status.toString()=="liber")
                                        {
                                            $('#b').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                            
                                        }
                                        else
                                        {
                                            $('#b').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                        }
                                    } else if(data[i].parcel=="C")
                                            { 
                                                if(data[i].status.toString()=="liber")
                                                {
                                                    $('#c').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                    
                                                }
                                                else
                                                {
                                                    $('#c').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                }
                                            }else if(data[i].parcel=="D")
                                                    { 
                                                        if(data[i].status.toString()=="liber")
                                                        {
                                                            $('#d').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                            
                                                        }
                                                        else
                                                        {
                                                            $('#d').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                        }
                                                    }else if(data[i].parcel=="E")
                                                            { 
                                                                if(data[i].status.toString()=="liber")
                                                                {
                                                                    $('#e').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                    
                                                                }
                                                                else
                                                                {
                                                                    $('#e').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                }
                                                            }else if(data[i].parcel=="F")
                                                                    { 
                                                                        if(data[i].status.toString()=="liber")
                                                                        {
                                                                            $('#f').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                            
                                                                        }
                                                                        else
                                                                        {
                                                                            $('#f').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                        }
                                                                    }else if(data[i].parcel=="G")
                                                                            { 
                                                                                if(data[i].status.toString()=="liber")
                                                                                {
                                                                                    $('#g').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                                    
                                                                                }
                                                                                else
                                                                                {
                                                                                    $('#g').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                                }
                                                                            }else if(data[i].parcel=="H")
                                                                                    { 
                                                                                        if(data[i].status.toString()=="liber")
                                                                                        {
                                                                                            $('#h').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                                            
                                                                                        }
                                                                                        else
                                                                                        {
                                                                                            $('#h').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                                        }
                                                                                    }else if(data[i].parcel=="I")
                                                                                            { 
                                                                                                if(data[i].status.toString()=="liber")
                                                                                                {
                                                                                                    $('#i').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                                                    
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    $('#i').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                                                }
                                                                                            }else if(data[i].parcel=="J")
                                                                                                    { 
                                                                                                        if(data[i].status.toString()=="liber")
                                                                                                        {
                                                                                                            $('#j').append("<button class='btn btn-warning' value='"+data[i].idParkingSpace+"' onClick='chose_parkingPlace(this)'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                                                            
                                                                                                        }
                                                                                                        else
                                                                                                        {
                                                                                                            $('#j').append("<button class='btn btn-danger' data-toggle='modal' data-target='#modalOcupat'>"+"<i class='fa fa-car' aria-hidden='true'></i>&nbsp;"+"</button>");
                                                                                                        }
                                                                                                    }
                            
                        }
                    }
                }});
            }
            
        
            //-------------------------------------------------------------functie care preia id-ul locului de parcare selectat -------------------------
            
             function chose_parkingPlace(clicked_place)
            {
                var id_selected_place=clicked_place.value;//id-ul locului de parcare selectat
                
                createTicket(id_selected_place);
               
            }
            
            
            //--------------------------------------------functie care creaza ticketul de parcare => pe baza id-ului locului de parcare primit, ia din baza de date, datele locului de parcare si le pune pe ticket + data curenta-------------7
            //---------------------------------------------tot functia asta construieste un nou ticket cu datele astea si il adauga in baza de date------------------------
            
            function createTicket(id_selected_place)
            {   
                idt=idt+1;
                var currentdate=new Date();
                var datetime = currentdate.getDate() + "/"+(currentdate.getMonth()+1)+ "/" + currentdate.getFullYear() + " " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
                
                
                 var url='/parkingSpaces/'+id_selected_place;
                $.ajax({url:url, success: function(data) {
                        $('#antet').append("<span class='numberSpace'>"+data.floor+":"+data.parcel+":"+data.number+"</span>");
                        $('#floor').append("<span >"+'floor:'+"</span>");
                        $('#floor').append("<span class='place'>"+data.floor+"</span>");
                        $('#parcel').append("<span >"+'parcel:'+"</span>");
                        $('#parcel').append("<span class='place'>"+data.parcel+"</span>");
                        $('#number').append("<span >"+'number:'+"</span>");
                        $('#number').append("<span class='place'>"+data.number+"</span>");
                        $('#date').append("<span >"+'date:'+"</span>");
                        $('#date').append("<span >"+datetime+"</span>");
                        $('#footer').append("<span >"+'Ticket id:'+"</span>");
                        $('#footer').append("<span >"+idt+"</span>");
                }});    
                    
                    //     //-----------------------------------------creez un nou ticket si il adaug in baza de date----------------------
                 $.post( "/tickets", { "idTicket":idt,"idParkingSpace":id_selected_place,"entryDate":currentdate } );
                 
                 //-----------------------------------------------modific starea locului de parcare selectat din liber in ocupat si reincarc parcarea-----------
                  $.ajax({
                      url: url,
                      type: 'PUT',
                      data: "status=ocupat",
                      success: function(data) {
                       loadParking(); 
                      }
                    });
                    
                 
            }
            
            //---------------------------------------------------functie care pregateste ticketul pt noul client
            function newClient()
            {
             
            deleteOldStatusTicket();
                
            }
            