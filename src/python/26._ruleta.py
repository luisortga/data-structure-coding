import random

ruleta = list(range(37))+[7]*10

count7: int = 0
for _ in range(1000):
    
    if random.choice(ruleta) == 7:
        count7 += 1
        
print(count7)
    