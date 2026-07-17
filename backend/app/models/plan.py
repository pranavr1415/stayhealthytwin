# Contains the JSON format of the plan

types = ("v", "nv")

plans = ("bulk", "cut", "bd")

user_data = {
    "height": 0,
    "weight": 0,
    "type": types[0],
    "allergies": "",
    "restrictions": "" 
}

plan_data = {
    "plan": plans[0],
    "breakfast":[[], [], [], [], [], [], []],
    "lunch":[[], [], [], [], [], [], []],
    "dinner":[[], [], [], [], [], [], []]
}

class MyPlan:

    def __init__(self, id , user_id, user_data, private=False):
        self.id = id
        self.user_id = user_id
        self.private = private
        self.user_data = user_data
        self.plan_data = {}

    def getData(self):
        return self.data

    def updateData(self, user_data):
        self.user_data = user_data

    def getPlanData(self):
        return self.plan_data
    
    def updatePlanData(self, plan_data):
        self.plan_data = plan_data

    