package com.topline.utils;
import java.text.SimpleDateFormat;
import java.util.Date;

public class GlobalCC {

	public static String getCurrentTime(){
		  SimpleDateFormat sdfTime = new SimpleDateFormat("HH:mm:ss");

		    Date now = new Date();

		    String strTime = sdfTime.format(now);

		    System.out.println("Time: " + strTime);
		return strTime;
	}
	 public static Date convertDate(String indate){
	      java.util.Date utilToday = new java.util.Date();
	      SimpleDateFormat sdf1 = new SimpleDateFormat("dd/mm/yyyy");
	     long retDate=0;
	      try{
	         utilToday = sdf1.parse(indate);
	    retDate=utilToday.getTime();
	    utilToday=new Date(retDate);
	        //retDate=new SimpleDateFormat("dd/mmm/yyyy").format(utilToday);
	    
	        
	      }
	      catch(Exception e){
	      e.printStackTrace();
	      return null;
	      }
	      return utilToday;
	    }
	   public static java.sql.Date parseSQLDate(String someDate) {
	        java.util.Date utilToday = new java.util.Date();
	        SimpleDateFormat sdf1 = new SimpleDateFormat("dd/MM/yyyy");

	        java.sql.Date sqlDate = null;
	        try {
	            utilToday = sdf1.parse(someDate);
	            long t = utilToday.getTime();
	            sqlDate = new java.sql.Date(t);
	        } catch (Exception e) {
	            e.printStackTrace();
	        }

	        return sqlDate;
	    }
	   public static java.sql.Date parseLongDateDate(String someDate) {
	        java.util.Date utilToday = new java.util.Date();
	        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy/MM/dd");

	        java.sql.Date sqlDate = null;
	        try {
	            utilToday = sdf1.parse(someDate);
	            long t = utilToday.getTime();
	            sqlDate = new java.sql.Date(t);
	        } catch (Exception e) {
	            e.printStackTrace();
	        }

	        return sqlDate;
	    }
public static String CheckNullValues(Object obj){
		if(obj!=null){
			String myString=obj.toString();
			if(myString.trim().length()<1){
				return null;	
			}else{
				return myString;		
			}
		}else{
			return null;
		}
	      }

public  static  Date formatLongDateString(String dateString)
{
	Date convertedDate=null;
try{

SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
 convertedDate = dateFormat.parse(dateString);
 return convertedDate;
}catch(Exception e){
	e.printStackTrace();
	return null;
}


}
}
