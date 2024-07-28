import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

# Load the datasets
current_data = pd.read_csv('random_data.csv')
baseline_data = pd.read_csv('baseline_data.csv')

# Sidebar for selecting visualizations
st.sidebar.title("Visualization Selector")
visualization = st.sidebar.selectbox("Select a visualization type", 
                                     ["Age Distribution", "Monthly Income Comparison", "Savings Comparison", "Reinvestment and Profit Analysis"])

st.title("Data Visualization Analysis")
st.write(current_data.columns)

if visualization == "Age Distribution":
    st.header("Age Distribution")
    fig, ax = plt.subplots()
    ax.hist(current_data['Age'], bins=20, alpha=0.5, label='Current Data', color='b')
    ax.hist(baseline_data['Age'], bins=20, alpha=0.5, label='Baseline Data', color='r')
    ax.set_xlabel('Age')
    ax.set_ylabel('Frequency')
    ax.legend()
    st.pyplot(fig)

elif visualization == "Monthly Income Comparison":
    st.header("Monthly Income Comparison")
    fig, ax = plt.subplots()
    ax.plot(current_data['Date'], current_data['Monthly Income (INR)'], label='Current Data', color='b')
    ax.plot(baseline_data['Date'], baseline_data['Monthly Income (INR)'], label='Baseline Data', color='r')
    ax.set_xlabel('Date')
    ax.set_ylabel('Monthly Income (INR)')
    ax.legend()
    st.pyplot(fig)

elif visualization == "Savings Comparison":
    st.header("Savings Comparison")
    fig, ax = plt.subplots()
    ax.bar(current_data['Name'], current_data['Total Savings (INR)'], label='Current Data', color='b', alpha=0.6)
    ax.bar(baseline_data['Name'], baseline_data['Total Savings (INR)'], label='Baseline Data', color='r', alpha=0.6)
    ax.set_xlabel('Name')
    ax.set_ylabel('Total Savings (INR)')
    ax.legend()
    st.pyplot(fig)

elif visualization == "Reinvestment and Profit Analysis":
    st.header("Reinvestment and Profit Analysis")
    fig, ax = plt.subplots(2, 1, figsize=(10, 8))
    
    ax[0].scatter(current_data['Percentage of revenue you reinvest into the business'], current_data['Profit amount (monthly) (INR)'], label='Current Data', color='b')
    ax[0].set_xlabel('Percentage of Revenue Reinvested')
    ax[0].set_ylabel('Profit Amount (Monthly) (INR)')
    ax[0].legend()
    ax[0].set_title('Current Data')
    
    ax[1].scatter(baseline_data['Percentage of revenue you reinvest into the business'], baseline_data['Profit amount (monthly) (INR)'], label='Baseline Data', color='r')
    ax[1].set_xlabel('Percentage of Revenue Reinvested')
    ax[1].set_ylabel('Profit Amount (Monthly) (INR)')
    ax[1].legend()
    ax[1].set_title('Baseline Data')

    st.pyplot(fig)
