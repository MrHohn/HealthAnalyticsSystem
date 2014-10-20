//statesmap.js

      google.load('visualization', '1', {'packages': ['geochart']});
      google.setOnLoadCallback(getdata);

      function getdata() {
        $.getJSON(
          "../jsonsender/jsonsender.php", // The server URL
          {id: 0, who: 1}, 
          showdata // The function to call on completion.
        );
      }

      function showdata(json) {

        var tweetData = [];
        for (var i = 0; i < eval(json).length; i++){
       
          tweetData[i] = parseInt(json[i].state_count);

        }

        var data = new google.visualization.DataTable();
          
        data.addColumn('string', 'Country');
        data.addColumn('number', 'Amount of Tweets'); 
        // data.addColumn({type:'string', role:'tooltip'});
        // data.addColumn({type:'number', role:'amount'});

        data.addRows([[{v:'US-AK',f:'Alaska'},tweetData[0]]]);
                  
        data.addRows([[{v:'US-AL',f:'Alabama'},tweetData[1]]]);
        
        data.addRows([[{v:'US-AR',f:'Arkansas'},tweetData[2]]]);
        
        data.addRows([[{v:'US-AZ',f:'Arizona'},tweetData[3]]]);
        
        data.addRows([[{v:'US-CA',f:'California'},tweetData[4]]]);
        
        data.addRows([[{v:'US-CO',f:'Colorado'},tweetData[5]]]);
        
        data.addRows([[{v:'US-CT',f:'Connecticut'},tweetData[6]]]);
        
        data.addRows([[{v:'US-DE',f:'Delaware'},tweetData[7]]]);
        
        data.addRows([[{v:'US-FL',f:'Florida'},tweetData[8]]]);
        
        data.addRows([[{v:'US-GA',f:'Georgia'},tweetData[9]]]);
        
        data.addRows([[{v:'US-HI',f:'Hawaii'},tweetData[10]]]);
        
        data.addRows([[{v:'US-IA',f:'Iowa'},tweetData[11]]]);
        
        data.addRows([[{v:'US-ID',f:'Idaho'},tweetData[12]]]);
        
        data.addRows([[{v:'US-IL',f:'Illinois'},tweetData[13]]]);
        
        data.addRows([[{v:'US-IN',f:'Indiana'},tweetData[14]]]);
        
        data.addRows([[{v:'US-KS',f:'Kansas'},tweetData[15]]]);
        
        data.addRows([[{v:'US-KY',f:'Kentucky'},tweetData[16]]]);
        
        data.addRows([[{v:'US-LA',f:'Louisiana'},tweetData[17]]]);
        
        data.addRows([[{v:'US-MA',f:'Massachusetts'},tweetData[18]]]);
        
        data.addRows([[{v:'US-MD',f:'Maryland'},tweetData[19]]]);
        
        data.addRows([[{v:'US-ME',f:'Maine'},tweetData[20]]]);
        
        data.addRows([[{v:'US-MI',f:'Michigan'},tweetData[21]]]);
        
        data.addRows([[{v:'US-MN',f:'Minnesota'},tweetData[22]]]);
        
        data.addRows([[{v:'US-MO',f:'Missouri'},tweetData[23]]]);
        
        data.addRows([[{v:'US-MS',f:'Mississippi'},tweetData[24]]]);
        
        data.addRows([[{v:'US-MT',f:'Montana'},tweetData[25]]]);
        
        data.addRows([[{v:'US-NC',f:'North Carolina'},tweetData[26]]]);
        
        data.addRows([[{v:'US-ND',f:'North Dakota'},tweetData[27]]]);
        
        data.addRows([[{v:'US-NE',f:'Nebraska'},tweetData[28]]]);
        
        data.addRows([[{v:'US-NH',f:'New Hampshire'},tweetData[29]]]);
        
        data.addRows([[{v:'US-NJ',f:'New Jersey'},tweetData[30]]]);
        
        data.addRows([[{v:'US-NM',f:'New Mexico'},tweetData[31]]]);
        
        data.addRows([[{v:'US-NV',f:'Nevada'},tweetData[32]]]);
        
        data.addRows([[{v:'US-NY',f:'New York'},tweetData[33]]]);
        
        data.addRows([[{v:'US-OH',f:'Ohio'},tweetData[34]]]);
        
        data.addRows([[{v:'US-OK',f:'Oklahoma'},tweetData[35]]]);
        
        data.addRows([[{v:'US-OR',f:'Oregon'},tweetData[36]]]);
        
        data.addRows([[{v:'US-PA',f:'Pennsylvania'},tweetData[37]]]);
        
        data.addRows([[{v:'US-RI',f:'Rhode Island'},tweetData[38]]]);
        
        data.addRows([[{v:'US-SC',f:'South Carolina'},tweetData[39]]]);
        
        data.addRows([[{v:'US-SD',f:'South Dakota'},tweetData[40]]]);
        
        data.addRows([[{v:'US-TN',f:'Tennessee'},tweetData[41]]]);
        
        data.addRows([[{v:'US-TX',f:'Texas'},tweetData[42]]]);
        
        data.addRows([[{v:'US-UT',f:'Utah'},tweetData[43]]]);
        
        data.addRows([[{v:'US-VA',f:'Virginia'},tweetData[44]]]);
        
        data.addRows([[{v:'US-VT',f:'Vermont'},tweetData[45]]]);
        
        data.addRows([[{v:'US-WA',f:'Washington'},tweetData[46]]]);
        
        data.addRows([[{v:'US-WI',f:'Wisconsin'},tweetData[47]]]);
        
        data.addRows([[{v:'US-WV',f:'West Virginia'},tweetData[48]]]);
        
        data.addRows([[{v:'US-WY',f:'Wyoming'},tweetData[49]]]);
        
        var options = {
          backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 },
          colorAxis: {colors: ['#FFFF99', 'FF0000']},
          // colorAxis:  {minValue: 0, maxValue: 49,  colors: ['#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#438094','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#DE3403','#E0D39E','#E0D39E','#E0D39E','#E0D39E','#E0D39E','#E0D39E','#E0D39E','#E0D39E']},
          // legend: 'none',
          datalessRegionColor: '#f5f5f5',
          displayMode: 'regions', 
          enableRegionInteractivity: 'true', 
          resolution: 'provinces',
          // sizeAxis: {minValue: 1, maxValue:1, minSize:10, maxSize: 10},
          region:'US',
          keepAspectRatio: true,
          width:800,
          height:700,
          tooltip: {textStyle: {color: '#444444'}, trigger:'hover'}  
        };

        var chart = new google.visualization.GeoChart(document.getElementById('visual_geochart')); 

        chart.draw(data, options);
     
      }
