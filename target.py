import random

#people is a list of participant names ie ["John Smith","John Doe", "Joe Biden"]
def assign_targets(people):
	new = random.shuffle(people)
	ans = []
	for x in range(0, len(new)):
		ans.append({name:new[x],target:new[x+1]})
	return ans