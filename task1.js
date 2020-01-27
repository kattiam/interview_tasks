var i,j,num=12,val,total=999999;
var arr=[4,7,3,5,9];

for(i=0;i<arr.length;i++)
{
	for(j=i+1;j<arr.length;j++)
    {
    	if(arr[i]+arr[j] == num)
        {
        	tmp_total = i+j;
           	if(tmp_total <= total)
            {
            	total = tmp_total;
                tmp_total = 0;
                val = 0;
                val = arr[i]+","+arr[j];
            }
        }
    }
}
document.write(val);
