class school
{
  constructor(name,level,no)
  {
    this.name=name;
    this.level=level;
    this.no_of_students=no;
  }


  get name_of_school(){
    return this.name;
  }
  get level_of_school(){
    return this.level;
  }
  get no_of_students_school(){
    return this.no_of_students;
  }
    quickfacts()
  {
    console.log(this.name," educates "+this.no_of_students+"students at the"+this.level+ "school level.")
  }
  pickSubstituteTeacher(substituteTeachers)
  {
    var n=Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[n];
  }
  set no_of_students_new(newNumber){
    if(Number.isInteger(newNumber) && newNumber>0)
    {
      this.no_of_students=newNumber;
    }
    else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }

  }

}
class Primary extends school
{
  constructor(name,no,pickup)
  {
    super(name,"primary",no);
    this.pickup=pickup;
  }
  get pickuppolicy()
  {
    return this.pickup;
  }
}
class HighSchool extends school
{
  constructor(name,level,no,sport)
  {
    super(name,level,no);
    this.sportsTeams=sport;
  }
  get Sport_property()
  {
    console.log(this.sportsTeams);
  }
}
const lorraineHansbury=new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickfacts();
console.log(lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
const alSmith=new HighSchool('Al E. Smith','high',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.Sport_property;
