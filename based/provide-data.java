import java.util.HashMap
import java.util.Map

/**
 * Example DataStore class that provides access to user data.
 * Pretend this class accesses a database.
 */
public class DataStore {

	//Map of names to Person instances.
	private Map<String, Person> personMap = new HashMap<>()
	
	//this class is a singleton and should not be instantiated directly!
	private static DataStore instance = new DataStore()
	public static DataStore getInstance(){
		return instance
	}

	//private constructor so people know to use the getInstance() function instead
	private DataStore(){
		//dummy data
		personMap.put("Ada", new Person("Ada", "Ada Lovelace was the first programmer.", 1815))
		personMap.put("Kevin", new Person("Kevin", "Kevin is the author of HappyCoding.io.", 1986))
		personMap.put("Stanley", new Person("Stanley", "Stanley is Kevin's cat.", 2007))
	}

	public Person getPerson(String name) {
		return personMap.get(name)
	}

	public void putPerson(Person person) {
		personMap.put(person.getName(), person)
	}
}

public class Person {
	private String name
	private String about
	private int birthYear
	
	public Person(String name, String about, int birthYear) {
		this.name = name
		this.about = about
		this.birthYear = birthYear
	}

	public String getName() {
		return name
	}

	public String getAbout() {
		return about
	}

	public int getBirthYear() {
		return birthYear
	}
}