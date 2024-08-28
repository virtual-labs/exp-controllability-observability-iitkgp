## Introduction

<div align="center">
<img src="experiment/images/iitkgp.png" width="10%">
</div>

<b>Discipline | <b>Electrical Engineering 
:--|:--|
<b> Lab | <b> Digital Control Laboratory
<b> Experiment|     <b> Controllability and Observability of Inverted Pendulum on Cart and Exp 6

### About the Experiment 

Linear time invariant system may be represented in state space form by the following equations:
</br>
State equation:

$$ \dot{x}(t)=A x(t)+B u(t) \tag{1a} $$

Output equation:

$$ y(t)= C x(t) + D u(t) \tag{1b} $$


where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) is state vector, <span style="font-family:Sitka Text;font-style:italic">y</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) is output vector, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span> is input or control vector, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">A</span> is system matrix, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">B</span> is input matrix, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">C</span> is output matrix and <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">D</span> is feed forward matrix.</br></br>
The concepts of controllability and observability were introduced by Kalman. The conditions of controllabilty and observability may govern the existence of a complete solution to the control system design problem.
The solution to this problem may not exist if the system considered is not controllable. Although most physical systems are controllable and observable, corresponding mathematical models may not possess the property 
of controllability and observability. Then it is necessary to know the conditions under which a system is controllable and observable.</br></br>
A system is said to be controllable at time <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>0</sub> if it is possible by means of an unconstrained control vector to transfer the system from any initial state <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>0</sub>)
to any other state in a finite time interval of time.</br></br>
A system is said to be observable at time <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>0</sub> if, with the system is state <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>0</sub>), it is possible to determine this state from the observation of the output over a finite time interval. 



	

<b>Subject matter expertise | <b> **Prof. Alok Kanti Deb**
:--|:--|
<b> Institute | <b>  **Indian Institute of Technology Kharagpur**
<b> Email id|     <b>  **alokkanti@ee.iitkgp.ac.in**
<b> Department |  **Department of Electrical Engineering**
<b>Webpage| <b> http://www.iitkgp.ac.in/department/EE/faculty/ee-alokkanti

### Contributors List

SrNo | Name | VLabs Developer or Integration Engineer | Designation | Department| Institute
:--|:--|:--|:--|:--|:--|
1 | **Kamal Sandeep Karreddula** | Developer | Research Scholar | Department of Electrical Engineering | IIT Kharagpur | 
2 | **Piyali Chattopadhyay** | Integration Engineer | Project Scientist | Department of Mechanical Engineering | IIT Kharagpur |


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>