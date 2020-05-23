package personalProject;

import java.util.*;

/*some layout ideas taken from "Head First Java 2nd edition"*/
public class Battleship {
	SetUp ships = new SetUp();
	private LinkedHashSet<LinkedHashSet<String>> shipsList = new LinkedHashSet<LinkedHashSet<String>>();
	private LinkedHashSet<String> hitList = new LinkedHashSet<String>();
	private LinkedHashSet<String> missList = new LinkedHashSet<String>();
	private int numOfGuesses=0;
    private int killsLeft = 3; 
	
	
	/*setup game*/
	public void setUpGame() {
		shipsList = ships.placeShips();
		System.out.println("There are 3 ships to sink on a 7x7 game board.");
		System.out.println("Coordinates of each ship range from a-g and 0-7." + "\n");
		System.out.println("Try to sink them all with the least number of guesses!");
		System.out.println(shipsList);
	}
	
	
	/*playing game*/
	public void playGame() {
		while(killsLeft != 0) {
			  System.out.println();
			  String guess = ships.getInput("Guess a coordinate:");
			  checkGuess(guess);
		}
		finishGame();
		System.out.println(hitList);
	}
	
	
	/*checkGuess*/
	public void checkGuess(String userInput) {
		
		boolean hit = false;
		numOfGuesses++; 
		for(LinkedHashSet<String> ship: shipsList ) {
			hit = ship.contains(userInput);
			if(hit) {
				System.out.println("hit");
				hitList.add(userInput);
				ship.remove(userInput);
				if(ship.isEmpty()) {
					killsLeft--;
					System.out.println("kill");
					System.out.println("Only " + killsLeft + " ships left");
				}
				if(hitList.size() > 0) {
					System.out.println("all hits:" + "\n" + hitList);
				}
				break;
			}else{
				missList.add(userInput);
			}
			
		}
		if(missList.contains(userInput) && !hitList.contains(userInput)) {
			System.out.println("miss");
			if(missList.size() > 0) {
				System.out.println("all misses:" + "\n" + missList);
			}
		}
	}
	
	
	/*finish game*/
	public void finishGame() {
		System.out.print("Congrats you sank all the ships with " + numOfGuesses + " guesses!");
	}
	
	public static void main(String[] args) {
	  Battleship game = new Battleship();
	  game.setUpGame();
	  game.playGame();
	}

}
