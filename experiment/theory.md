# Theory

Linear time invariant system may be represented in state space form by the following equations:
State equation:
$$ \dot{x}(t)=A x(t)+B u(t) \tag{1a} $$
Output equation:
$$ y(t)= C x(t) + D u(t) \tag{1b} $$
<b><i>Controllability:</i></b> <br>
The system described by equation (1a) is said to be state controllable at time <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t = t</span><sub>0</sub> if it is possible to construct 
an unconstrained control signal that will transfer an initial state <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>0</sub>)
to any final state <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>f</sub>) in a finite time interval 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>0</sub> &le; <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span> &le; <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>f</sub>. If every state is controllable, then the system is said to be completely state controllable. </br></br>

Controllability Test:</br>
The system given by equation (1a) is completely state controllable if and only if the vectors <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">B, AB, A<sup>2</sup>B,...,A<sup>n-1</sup>B</span> are linearly independent or the (n x n) matrix 
$$ Q_c = [B,AB,A^2B,...A^{n-1}B]$$
is of rank <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">n. Q</span><sub>c</sub> is commonly called the controllability matrix.
</br>

<b><i>Observability:</i></b> <br>
A system is said to be completely observable if every state <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>0</sub>) can be determined from the observation of the output <span style="font-family:Sitka Text;font-style:italic;font-size:18px">y</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>)
over a finite time interval <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>0</sub> &le; <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span> &le; <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span><sub>f</sub>.
The system is, therefore, completely observable if every transistion of the state eventually affects every element of the output vector. </br></br>
Observability Test:</br>
The system is completely observable if and only if the matrix 
$$ Q_o = [C, CA, CA^2,...,CA^{n-1}]^T$$
is of rank <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">n</span> or has <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">n</span> linearly independent column vectors. <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">Q</span><sub>o</sub> is commonly called the Observability matrix.</br></br>

<b><i>State Space Model of Inverted Pendulumn on cart:</i></b> <br>
The system consists of an inverted pendulum mounted to a motorized cart. Its popularity derives in part from the fact that it is unstable without control, that is, the pendulum will simply fall over if the cart isn't moved to balance it. 
Additionally, the dynamics of the system are nonlinear. The objective of the control system is to balance the inverted pendulum by applying a force to the cart that the pendulum is attached. A real-world example that relates directly to this inverted pendulum system is the attitude control of a booster rocket at takeoff.</br>
In this case we will consider a two-dimensional problem where the pendulum is constrained to move in the vertical plane shown in the figure below. For this system, the control input is the force <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> that moves the cart horizontally and the outputs are the angular position of the pendulum &theta; and the horizontal position of the cart <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>. </br>
<div align="center">
<img class="img-fluid"  src="./images/Inverted_Pendulum.png" alt=""><br>        
<figcaption style="color:black"> Fig.1. Invereted Pendulum on Cart</figcaption>						  
</div><br/>
where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">M</span> is mass of the cart (kg), <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">m</span> is mass of the pendulum (kg), 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">b</span> is coefficient of friction for cart (N/m/sec), <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">l</span> is length to pendulum center of mass (meters), <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">I</span> is mass moment of inertia of the pendulum (kg.m<sup>2</sup>)
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> is force applied to the cart, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span> is cart position coordinate, &theta; is pendulum angle from vertical (down).</br></br>
The linearized equations of motion can also be represented in state-space form:</br>
Let &Phi; represent the deviation of the pedulum's position, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span> has been substituted for the input <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span>.
<div align="center">
<img class="img-fluid"  src="./images/SS_Pendulum_Cart.png" alt=""><br>        

</div><br/>

				                   



<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>