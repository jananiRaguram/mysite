package personalProject;

import java.util.*;
import java.io.*;

public class SetUp {
	/*getInput from Head First Java 2nd Edition*/
	public String getInput(String prompt) {
		String inputLine = null;
		System.out.print(prompt + " ");
		try {
			BufferedReader is = new BufferedReader(new InputStreamReader(System.in));
			inputLine = is.readLine();
			if (inputLine.length() == 0 ) return null;
		} catch (IOException e) {
			System.out.println("IOException: " + e);
		}
		return inputLine.toLowerCase();
	}
	
	public LinkedHashSet<LinkedHashSet<String>> placeShips() {
		LinkedHashSet<LinkedHashSet<String>> ships = new LinkedHashSet<LinkedHashSet<String>>();
		String coord = null;
		int max = 7;
		int min = 1; 
		char newC = '\0';
		int numOfShips = 1;
		ArrayList<Character> usedC = new ArrayList<Character>();
		
		while(ships.size() != 3) {
			/*setting a random size for each ship*/
			Random size = new Random();
			int shipSize = size.nextInt((max - min) + 1) + min;
//			System.out.println("ship size" + shipSize);
			
			/*creating an array for each ships coords*/
			String eachShip[] = new String[shipSize];
			
			/*random starting character*/
			String alpha = "abcdefg";
			Random rndChar = new Random();
			char c = alpha.charAt(rndChar.nextInt(alpha.length()));
//			System.out.println(numOfShips);
			
			/*getting only unique letters for each ship*/
			if(numOfShips > 1) {
				/*check is current char is already used*/
				if(usedC.contains(c)) {
					/*create new char and compare with rest until its unique*/
					rndChar = new Random();
					newC = alpha.charAt(rndChar.nextInt(alpha.length()));
					while(usedC.contains(newC)) {
						rndChar = new Random();
						newC = alpha.charAt(rndChar.nextInt(alpha.length()));
					}
					usedC.add(newC);
					c = newC;
				}
			}
			usedC.add(c);
			
			/*random number from 0 to 7 (inclusive)*/
			Random rndNum = new Random();
			int num = rndNum.nextInt((7 - 0) + 1) + 0; 
			
			/*making sure that the range for the ship size can fit in the starting position*/
			int rightSize = num + shipSize;
			while(rightSize > 7) {
				num = rndNum.nextInt((7 - 0) + 1) + 0;
				rightSize = num + shipSize;
//				System.out.println("bigger randnum" + num);
			}
//			System.out.println("start randnum" + num);
			
			int i = 0; 
			while( i < shipSize) {
				/*creating the coordinate*/
				coord = Character.toString(c) + Integer.toString(num);
//				System.out.println("each randnum " + num);
				/* putting each ships coord into an array which will be added to the arrayList later */
				eachShip[i] = coord;
				num++;
//				System.out.print("i" + i);
				i++;
				
			}
			numOfShips++;
			List<String> coordList = Arrays.asList(eachShip);
			Collections.sort(coordList);
			ships.add(new LinkedHashSet<String>(coordList));
		}
		
		return ships;
	}
}