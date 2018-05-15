/*
const regex = new RegExp(/([A-Z]+([ -:])?\d+) (.+)/);
console.log(regex.test('CS111 F2016'));
console.log(regex.test('CS 111 F2016'));
console.log(regex.test('CS-111 F2016'));
console.log(regex.test('CS:111 F2016'));

console.log(regex.test('CS111 Fall 2016'));
console.log(regex.test('CS111 fall 16'));
console.log(regex.test('CS111 2016 Fall'));
console.log(regex.test('CS111 F2016'));

console.log(regex.test('CS_111 F2016'));
*/
class Course {
  constructor(course) {
    this.course = course;
    this.department = '';
    this.courseNumber = '';
    this.year = '';
    this.semester = '';
    this.parseCourseStr(course);
  }

  parseSemesterYear(semesterYear) {
    //console.log('inside parseSemesterYear: ', semesterYear);
    if (/\d/.test(semesterYear[0])) {
      //parse year first
      for (let i = 0; i < semesterYear.length; i++) {
        if (/\D/.test(semesterYear[i])) {
          this.year = semesterYear.substring(0, i);
          this.semester = semesterYear.substring(i);
          break;
        }
      }
    } else {
      //parse semester first
      for (let i = 0; i < semesterYear.length; i++) {
        if (/\d/.test(semesterYear[i])) {
          this.semester = semesterYear.substring(0, i);
          this.year = semesterYear.substring(i);
          break;
        }
      }
    }
  }

  parseDeptCourseNum(deptCourseNum) {
    let parts2;
    //console.log('inside parseDeptCourseNum: ', deptCourseNum);

    if (deptCourseNum.indexOf('-') > -1) {
      parts2 = deptCourseNum.split('-');
      if (parts2.length === 2) {
        this.department = parts2[0];
        this.courseNumber = parts2[1];
      }
    } else if (deptCourseNum.indexOf(':') > -1) {
      parts2 = deptCourseNum.split(':');
      if (parts2.length === 2) {
        this.department = parts2[0];
        this.courseNumber = parts2[1];
      }
    } else {
      //No separator between dept./course num.
      //console.log('No separator between dept./course num: ', deptCourseNum);
      for (let i = 0; i < deptCourseNum.length; i++) {
        if (/\d/.test(deptCourseNum[i])) {
          this.department = deptCourseNum.substring(0, i);
          this.courseNumber = deptCourseNum.substring(i);
          break;
        }
      }
    }
  }

  parseCourseStr(course) {
    const regex = new RegExp(/([A-Z]+([ -:])?\d+) (.+)/);

    if (regex.test(course)) {
      const parts = course.split(' ');

      if (parts.length === 2) {
        //console.log('parts.length === 2 - before: ', parts);

        this.parseDeptCourseNum(parts[0]); //parts[0] === dept./course num.
        this.parseSemesterYear(parts[1]); //parts[1] === semester/year
        //refactor the below code into a re-usable method
        // if (deptCourseNum.indexOf('-') > -1) {
        //     parts2 = deptCourseNum.split('-');
        //     if (parts2.length === 2) {
        //         this.department = parts2[0];
        //         this.courseNumber = parts2[1];
        //     }
        // } else if (deptCourseNum.indexOf(':') > -1) {
        //     parts2 = deptCourseNum.split(':');
        //     if (parts2.length === 2) {
        //         this.department = parts2[0];
        //         this.courseNumber = parts2[1];
        //     }
        // } else {
        //     //No separator between dept./course num.
        //     console.log('No separator between dept./course num: ', deptCourseNum);
        //     for (let i = 0; i < deptCourseNum.length; i++) {
        //         if (/\d/.test(deptCourseNum[i])) {
        //             this.department = deptCourseNum.substring(0, i);
        //             this.courseNumber = deptCourseNum.substring(i);
        //             break;
        //         }
        //     }
        // }
        //console.log(parts, this);
        //console.log('parts.length === 2 - after: ', parts, this);
      } else if (parts.length === 3) {
        //console.log('parts.length === 3 - before:', parts, this);

        if (/\D/.test(parts[0][0])) {
          //console.log('parts[0]: ', parts[0]);
          if (/[a-zA-Z]/.test(parts[0][0])) {
            //console.log('one - parts[0][0]:', parts[0][0], 'parts[0][parts[0].length - 1]:', parts[0][parts[0].length - 1]);
            if (/\d/.test(parts[0][parts[0].length - 1])) {
              //console.log('calling parseDeptCourseNum with: ', parts[0]);
              this.parseDeptCourseNum(parts[0]);
              this.parseSemesterYear(parts[1] + parts[2]);
            } else {
              //console.log('two - parts: ', parts);
              this.department = parts[0];
              if (/\d+/.test(parts[1])) {
                //console.log('three');
                this.courseNumber = parts[1];
                this.parseSemesterYear(parts[2]);
              } else if (/\D+/.test(parts[1])) {
                //console.log('four - parts[1]: ', parts[1]);
                this.semester = parts[1];
              } else {
                //console.log('five');
                console.log('Invalid course format1: ', parts);
              }
            }
          } else {
            console.log('Invalid course format2');
          }
        } else {
          console.log('Invalid course format2');
        }

        //console.log('parts.length === 3 - after:', parts, this);
      } else if (parts.length === 4) {
        //console.log('parts.length === 4 - before:', parts, this);
        if (/\D/.test(parts[0][0])) {
          if (/\D+/.test(parts[0])) {
            this.department = parts[0];
            if (/\d+/.test(parts[1])) {
              this.courseNumber = parts[1];
              if (/\d+/.test(parts[2])) {
                this.year = parts[2];
                if (/\D+/.test(parts[3])) {
                  this.semester = parts[3];
                } else {
                  console.log('Invalid course format3');
                }
              } else if (/\D+/.test(parts[2])) {
                this.semester = parts[2];
                if (/\d+/.test(parts[3])) {
                  this.year = parts[3];
                } else {
                  console.log('Invalid course format4');
                }
              } else {
                console.log('Invalid course format5');
              }
            } else {
              console.log('Invalid course format6');
            }
          } else {
            console.log('Invalid course format7');
          }

          //console.log('parts.length === 4 - after:', parts, this);
        } else {
          console.log('Invalid course format8');
        }
      } else {
        console.log('Invalid course format9');
      }
    } else {
      console.log('Invalid course format');
    }
  }
}

const myCourse1 = new Course('CS111 F2016');
console.log(myCourse1);

const myCourse2 = new Course('CS 111 F2016');
console.log(myCourse2);

const myCourse3 = new Course('CS-111 F2016');
console.log(myCourse3);

const myCourse4 = new Course('CS:111 F2016');
console.log(myCourse4);

const myCourse5 = new Course('CS111 Fall 2016');
console.log(myCourse5);

const myCourse5a = new Course('CS 111 Fall 2016');
console.log(myCourse5a);

const myCourse5b = new Course('CS-111 Fall 2016');
console.log(myCourse5b);

const myCourse5c = new Course('CS:111 Fall 2016');
console.log(myCourse5c);

const myCourse6 = new Course('CS111 fall 16');
console.log(myCourse6);

const myCourse6a = new Course('CS 111 fall 16');
console.log(myCourse6a);

const myCourse6b = new Course('CS-111 fall 16');
console.log(myCourse6b);

const myCourse6c = new Course('CS:111 fall 16');
console.log(myCourse6c);

const myCourse7 = new Course('CS111 2016 Fall');
console.log(myCourse7);

const myCourse7a = new Course('CS 111 2016 Fall');
console.log(myCourse7a);

const myCourse7b = new Course('CS-111 2016 Fall');
console.log(myCourse7b);

const myCourse7c = new Course('CS:111 2016 Fall');
console.log(myCourse7c);

const myCourse8 = new Course('CS111 F2016');
console.log(myCourse8);

const myCourse8a = new Course('CS 111 F2016');
console.log(myCourse8a);

const myCourse8b = new Course('CS-111 F2016');
console.log(myCourse8b);

const myCourse8c = new Course('CS:111 F2016');
console.log(myCourse8c);

const myCourse9 = new Course('CS_111 F2016');
console.log(myCourse9);
