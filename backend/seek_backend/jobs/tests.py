from django.test import TestCase

# Create your tests here.

def tournamentWinner(competitions, results):
    newdict={}
    
    for index,array in enumerate(competitions):
        dict_keys=list(newdict.keys())
        if results[index]==0:
            if array[1] in dict_keys:
                newdict[array[1]]+=3
            else:
                newdict[array[1]]=3
        elif results[index]==1:
            if array[0] in dict_keys:
                newdict[array[0]]+=3
            else:
                newdict[array[0]]=3

    kay = max(newdict, key=newdict.get)
    print(kay)
    return True


competitions = [
    ['HTML','C#'],
    ['C#','Python'],
    ['Python','HTML']
]
results = [0,0,1]

tournamentWinner(competitions, results)