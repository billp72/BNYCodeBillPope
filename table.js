//TODO: load data async -- make responsive table 

window.onload = function() {
let file = {
  "headers": [
    {
      "id": "first", "label": "First Name"
    },
    {
      "id": "last", "label": "Last Name"
    },
    {
      "id": "phone", "label": "Telephone"
    },
    {
      "id": "email", "label": "email"
    },
    {
      "id": "skill1", "label": "Main Skill"
    },
    {
      "id": "skill2", "label": "2nd Skill"
    },
    {
      "id": "skill3", "label": "3th Skill"
    }
  ],
  "rows": [
    [
      {
        "id": "first ", "value": "Pablo"
      },
      {
        "id": "last ", "value": "Smith"
      },
      {
        "id": "phone", "value": "123-333-4455"
      },
      {
        "id": "email ", "value": "pablo@testemail.com"
      },
      {
        "id": "skill1", "value": "HTML"
      },
      {
        "id": "skill2", "value": "CSS"
      },
      {
        "id": "skill3", "value": "JavaScript"
      }
    ],
    [
      {
        "id": "first ", "value": "John"
      },
      {
        "id": "last ", "value": "Kent"
      },
      {
        "id": "phone", "value": "123-444-5566"
      },
      {
        "id": "email ", "value": "john@myemail.com"
      },
      {
        "id": "skill1", "value": "JavaScript"
      },
      {
        "id": "skill2", "value": "CSS"
      },
      {
        "id": "skill3", "value": "HTML"
      }
    ],
    [
      {
        "id": "first ", "value": "Mary"
      },
      {
        "id": "last ", "value": "Doe"
      },
      {
        "id": "phone", "value": "999-111-5566"
      },
      {
        "id": "email ", "value": "mary@coolemail.com"
      },
      {
        "id": "skill1", "value": "HTML"
      },
      {
        "id": "skill2", "value": "CSS"
      },
      {
        "id": "skill3", "value": "JavaScript"
      }
    ],
    [
      {
        "id": "first ", "value": "Sudeep"
      },
      {
        "id": "last ", "value": "Patel"
      },
      {
        "id": "phone", "value": "111-333-5566"
      },
      {
        "id": "email ", "value": "sudeep@myemail.com"
      },
      {
        "id": "skill1", "value": "Java"
      },
      {
        "id": "skill2", "value": "JavaScript"
      },
      {
        "id": "skill3", "value": "HTML"
      }
    ],
    [
      {
        "id": "first ", "value": "Marcus"
      },
      {
        "id": "last ", "value": "Shelling"
      },
      {
        "id": "phone", "value": "123-666-5577"
      },
      {
        "id": "email ", "value": "marcus@testemail.com"
      },
      {
        "id": "skill1", "value": "jQuery"
      },
      {
        "id": "skill2", "value": "JavaScript"
      },
      {
        "id": "skill3", "value": "Angular"
      }
    ],
    [
      {
        "id": "first ", "value": "Molly"
      },
      {
        "id": "last ", "value": "Reading"
      },
      {
        "id": "phone", "value": "222-111-5577"
      },
      {
        "id": "email ", "value": "molly@coolemail.com"
      },
      {
        "id": "skill1", "value": "React"
      },
      {
        "id": "skill2", "value": "JavaScript"
      },
      {
        "id": "skill3", "value": "Angular"
      }
    ],
    [
      {
        "id": "first ", "value": "Terry"
      },
      {
        "id": "last ", "value": "Miller"
      },
      {
        "id": "phone", "value": "555-222-5577"
      },
      {
        "id": "email ", "value": "terry@myemail.com"
      },
      {
        "id": "skill1", "value": "Java"
      },
      {
        "id": "skill2", "value": "C"
      },
      {
        "id": "skill3", "value": "JavaScript"
      }
    ],
    [
      {
        "id": "first ", "value": "Joanna"
      },
      {
        "id": "last ", "value": "Johnson"
      },
      {
        "id": "phone", "value": "111-234-6879"
      },
      {
        "id": "email ", "value": "joanna@testemail.com"
      },
      {
        "id": "skill1", "value": "PhotoShop"
      },
      {
        "id": "skill2", "value": "HTML"
      },
      {
        "id": "skill3", "value": "CSS"
      }
    ],
    [
      {
        "id": "first ", "value": "Chris"
      },
      {
        "id": "last ", "value": "Silver"
      },
      {
        "id": "phone", "value": "000-234-6879"
      },
      {
        "id": "email ", "value": "chris@testemail.com"
      },
      {
        "id": "skill1", "value": "JavaScript"
      },
      {
        "id": "skill2", "value": "jQuery"
      },
      {
        "id": "skill3", "value": "React"
      }
    ],
    [
      {
        "id": "first ", "value": "Mary"
      },
      {
        "id": "last ", "value": "Golden"
      },
      {
        "id": "phone", "value": "777-666-3421"
      },
      {
        "id": "email ", "value": "mary@coolemail.com"
      },
      {
        "id": "skill1", "value": "JavaScript"
      },
      {
        "id": "skill2", "value": "HTML"
      },
      {
        "id": "skill3", "value": "Angular"
      }
    ]
  ]
}



var template = document.getElementById('template').innerHTML;
/*fetch('data.json')
  .then(function(res){
    var data = res.json();*/
    file.index = function(){
      return file.rows.indexOf(this) + 1;
    }
    var rendered =
        Mustache.render(template, file);

    document.body.innerHTML = rendered;
  //}).then(function(){})
  

  function sortTable(f,n){

      var rows = $('table tbody tr').get();
   
      rows.sort(function(a, b) {

        var A = getVal(a);
        var B = getVal(b);

        if(A < B) {
          return -1*f;
        }
        if(A > B) {
          return 1*f;
        }
      return 0;
    });

    function getVal(elm){
      var v = $(elm).children('td').eq(n).text().toUpperCase(); //get row index
      if($.isNumeric(v)){ //check type
        v = parseInt(v,10); //cast to base 10
      }
      return v;
    }

    $.each(rows, function(index, row) {//append rows in new order
      $('table').children('tbody').append(row);
    });
  }

  $('table').each(function() {
        var $table = $(this);
        $table.find('.click').click(function() {
            $toggle = $(this);
            var html = "<tr class='child'><td>&nbsp;</td><td>2007-01-02</td><td>A short description</td><td>15</td></tr>";
            if($toggle.parent().next().hasClass("child")){
               $toggle.parent().next().remove();
               $toggle.text("+");
            }else{
              $toggle.parent().after(html);
              $toggle.text("-");
            }
            
        });
      
  });

  let st = 1;

  $(".sort").click(function(){
      st *= -1;
      var n = $(this).prevAll().length;
      sortTable(st,n);

  });

};


