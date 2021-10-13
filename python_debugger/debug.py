import dis
import csv
import rdb
import test1
import test
import RObject
import FrameStep
import sys
import RFrame
import ast
import inspect

class debug:
    
    def __init__(self, program_name):
        self.frame_list = []
        self.frame_dict = dict()
        self.program_name = program_name
        self.debug_dict = dict()

    def trace_lines(self, frame, event, arg):
        print(frame.f_lineno)

    def read_ast(self):
        tree = None
        with open("test1.py","r") as f: 
            tree = ast.parse(f.read())
        r = RObject.RObject(tree)
        f.close
        return r
    
    def make_frame_step(self,frame, delta_dict):
        if(delta_dict == None):
            f_step = FrameStep.FrameStep({},frame.f_lineno) 
        return f_step

    #trace the call stack and store the frames in a dictionary
    def trace_calls(self,frame, event, arg):
        for i in inspect.stack():
            self.frame_dict.update({id(i.frame): i.frame})

    def get_target_program_frames(self, target_program_name):
        prog_name= target_program_name
        # set the trace on the program
        sys.settrace(self.trace_calls)
        #run the program
        test1.main()
        #get the list of frames
        self.frame_list = list(self.frame_dict.items())
        
        # for each frame in the frame list
        # check to see if its in the target program and add it to the dictionary

        for i in self.frame_list:
            x = inspect.getmodule(i[1])
            if(x.__name__ == prog_name):
                self.debug_dict.update({i[0]:i[1]})
        return self.debug_dict



    def run(self):
        # get the list of frame from the target dictionary
        my_dict = self.get_target_program_frames("test1")
        obj_list = list(my_dict.items())   
        # create the python debugger 
        psi = rdb.rdb()
        #psi.user_call(first_frame, None)
        
        for i in obj_list:
            psi.user_call(i[1], None)
            psi.user_line(i[1])
            psi.user_return(i[1], None)
            #print(psi.frame_steps)
        
        #print("PSI frame steps \n")
        #print(psi.frame_steps[0][1])
        #print(len(psi.frame_steps))
        #for i in psi.frame_steps:
            #print(i[1])
        print(psi.frame_steps)
        return psi.frame_steps
