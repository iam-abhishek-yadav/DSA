class Solution {
    studentGrade(marks) {
        const status = (marks) => {
            if(marks >= 90) return "Grade A"
            if(marks >= 70) return "Grade B"
            if(marks >= 50) return "Grade C"
            if(marks >= 35) return "Grade D"
            return "Fail"
        }
        console.log(status(marks))
    }
}